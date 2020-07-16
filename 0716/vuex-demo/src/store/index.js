import Vue from 'vue';
import MyVuex from '../myvuex';

Vue.use(MyVuex);

const store = new MyVuex.Store({
    state: {
        title: 'hello myvuex',
    },
    actions: {
        async actionChange({ commit }) {
            await new Promise(resolve => {
                setTimeout(() => {
                    commit('changeTitle', 'action change');
                    resolve();
                }, 500);
            });
        },
    },
    mutations: {
        changeTitle(state, payload) {
            state.title = payload;
        },
    },
    getters: {
        getterTitle(state) {
            return `getters ${state.title}`;
        },
    },
});

export default store;
