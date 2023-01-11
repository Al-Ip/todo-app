<template>
    <div>
        <h1> All Todos </h1>
        <br>

        <h3> Create a new Todo! </h3>
        <input type="text" placeholder="Author" v-model="state.newAuthor">
        <span>Test: {{ state.newAuthor }}</span>
        <br>
        <input type="text" placeholder="Todo" v-model="state.newTodoItem">
        <span>Test: {{ state.newTodoItem }}</span>
        <br>
        <button @click="NewTodo()"> New Todo </button>
        <hr>

        <div v-for="todo in state.todos" :key="todo._id">
            <hr>
            <router-link :to="`/todo/${todo._id}`">
                <h4>
                    {{ todo.author }}
                </h4>
                <p>
                    {{ todo.todo }}
                </p>
            </router-link>
            <hr>
        </div>
        <br>
    </div>
</template>

<script>
import todocrud from '../modules/todocrud'
import { onMounted } from 'vue'

    export default {
        setup () {    

            const { 
                state, 
                GetAllTodos, 
                NewTodo, 
            } = todocrud()

            onMounted(() => {
                GetAllTodos();
            })

            return { 
                state, 
                GetAllTodos,
                NewTodo, 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>