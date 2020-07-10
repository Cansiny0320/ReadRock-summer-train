<template>
    <div class="main">
        <h1 class="title">Todo List</h1>
        <div class="container">
            <div class="input">
                <input
                    type="text"
                    v-model="newTodo"
                    @keydown.enter="add"
                    placeholder="添加一个代办"
                />
            </div>
            <ul class="list">
                <li
                    v-for="(item, index) in todoList"
                    :key="'list-' + index"
                    class="item"
                >
                    <div class="index">{{ index + 1 }}.</div>
                    <div class="content">{{ item }}</div>
                    <div class="action">
                        <div class="done" @click="done(index)">⬜</div>
                        <div class="del" @click="delect(index)">❌</div>
                    </div>
                </li>
                <li
                    v-for="(item, index) in doneList"
                    :key="'list2-' + index"
                    class="item done"
                >
                    <div class="content">{{ item }}</div>
                    <div class="action">
                        <div class="done" @click="unDone(index)">✅</div>
                        <div class="del" @click="delect2(index)">❌</div>
                    </div>
                </li>
            </ul>
            <div class="bottom" v-show="todoList.length">
                <div class="count">共有{{ todoList.length }}条代办</div>
                <div class="clear" @click="clear">Clear</div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api'
export default {
    setup() {
        const data = reactive({
            newTodo: '',
            todoList: [],
            doneList: [],
        })
        function add() {
            if (data.newTodo) {
                data.todoList.push(data.newTodo)
                data.newTodo = ''
                localStorage.setItem('todoList', JSON.stringify(data.todoList))
            }
        }
        function delect(index) {
            data.todoList.splice(index, 1)
            localStorage.setItem('todoList', JSON.stringify(data.todoList))
        }
        function delect2(index) {
            data.doneList.splice(index, 1)
            localStorage.setItem('doneList', JSON.stringify(data.todoList))
        }
        function done(index) {
            const todo = data.todoList.splice(index, 1)[0]
            data.doneList.push(todo)
            localStorage.setItem('todoList', JSON.stringify(data.todoList))

            localStorage.setItem('doneList', JSON.stringify(data.doneList))

        }
        function unDone(index) {
            const todo = data.doneList.splice(index, 1)[0]
            data.todoList.push(todo)
            localStorage.setItem('todoList', JSON.stringify(data.todoList))

            localStorage.setItem('doneList', JSON.stringify(data.doneList))

        }
        function clear() {
            data.todoList = []
            localStorage.setItem('todoList', JSON.stringify(data.todoList))
        }
        function $_init() {
            data.todoList = JSON.parse(localStorage.getItem('todoList')) || []
            data.doneList = JSON.parse(localStorage.getItem('doneList')) || []
        }
        return {
            ...toRefs(data),
            add,
            delect,
            delect2,
            done,
            unDone,
            clear,
            $_init
        }
    },
    created() {
        this.$_init()
    },
}
</script>

<style lang="scss" scoped>
.main {
    .title {
        text-align: center;
        margin: 30px auto;
    }
    .container {
        margin: 50px auto;
        width: 50%;
        box-shadow: 0 0 2px #000;
        .input {
            width: 100%;
            height: 60px;
            border: 1px solid #eee;
            input {
                width: 100%;
                height: 100%;
                padding: 10px;
                font-size: 18px;
                border: none;
                &:focus {
                    outline: medium;
                }
            }
        }
        .list {
            .item {
                display: flex;
                padding: 20px 10px;
                font-size: 18px;
                border: 1px solid #eee;
                &.done {
                    .content {
                        color: #666;
                        text-decoration: line-through;
                    }
                }
                .index {
                    margin-right: 10px;
                }
                .action {
                    display: flex;
                    margin-left: auto;
                    visibility: hidden;
                    cursor: pointer;
                    .done {
                        color: #44bc87;
                    }
                    .del {
                        color: #666;
                        margin-left: 5px;
                    }
                }

                &:hover {
                    .action {
                        visibility: visible;
                    }
                    background-color: #eee;
                }
            }
        }
        .bottom {
            padding: 10px;
            display: flex;
            color: #666;
            .clear {
                margin-left: auto;
                cursor: pointer;
            }
        }
    }
}
</style>