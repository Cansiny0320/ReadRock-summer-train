let Vue;
class Module {
    constructor(rawModule) {
        this.state = rawModule.state || {};
    }
}
export class Store {
    constructor(options = {}) {
        this._committing = false;
        this._actions = Object.create(null);
        this._mutations = Object.create(null);
        this._getters = Object.create(null);
        this._module = new Module(options);

        const state = this._module.state;
        register(this, {
            mutations: options.mutations,
            getters: options.getters,
            actions: options.actions,
        });

        const store = this;
        let { commit, dispatch } = this;
        this.commit = function boundCommit(type, payload) {
            return commit.call(store, type, payload);
        };
        this.dispatch = function boundDispatch(type, payload) {
            return dispatch.call(store, type, payload);
        };

        resetStoreVm(this, state);
    }

    get state() {
        return this._vm._data.$$state;
    }

    commit(type, payload) {
        const handler = this._mutations[type];
        this._withCommit(() => {
            handler(payload);
        });
    }

    dispatch(type, payload) {
        const handler = this._actions[type];
        handler(payload);
    }

    _withCommit(fn) {
        const committing = this._committing;
        this._committing = true;
        fn();
        this._committing = committing;
    }
}

function register(store, options) {
    Object.keys(options.getters).forEach(type => {
        registerGetter(store, type, options.getters[type]);
    });

    Object.keys(options.mutations).forEach(type => {
        registerMutation(store, type, options.mutations[type]);
    });

    Object.keys(options.actions).forEach(type => {
        registerAction(store, type, options.actions[type]);
    });
}

function registerGetter(store, type, rawGetter) {
    store._getters[type] = function() {
        return rawGetter(store.state, store.getters);
    };
}

function registerMutation(store, type, handler) {
    store._mutations[type] = function(payload) {
        return handler.call(store, store.state, payload);
    };
}

function registerAction(store, type, handler) {
    store._actions[type] = function(payload) {
        handler.call(
            store,
            {
                dispatch: store.dispatch,
                commit: store.commit,
                getters: store.getters,
                state: store.state,
            },
            payload
        );
    };
}

function resetStoreVm(store, state) {
    store.getters = {};
    let computed = {};
    let getters = store._getters;

    Object.keys(getters).forEach(key => {
        computed[key] = () => getters[key]();
        Object.defineProperty(store.getters, key, {
            get: () => store._vm[key],
            enumerable: true,
        });
    });

    store._vm = new Vue({
        data: {
            $$state: state,
        },
        computed,
    });
    store._vm.$watch(
        function() {
            return this._data.$$state;
        },
        () => {
            if (!store._committing) {
                throw new Error('state 只能通过mutation修改');
            }
        },
        {
            deep: true,
            sync: true,
        }
    );
}

export function install(_Vue) {
    Vue = _Vue;
    Vue.mixin({
        beforeCreate() {
            const options = this.$options;
            if (options.store) {
                this.$store = options.store;
            } else if (options.parent && options.parent.$store) {
                this.$store = options.parent.$store;
            }
        },
    });
}
