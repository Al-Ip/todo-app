<template>
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
        <div class="max-w-5xl mx-auto">
          <!-- Content goes here -->
            <h1 class="pt-5 text-4xl font-bold text-center text-indigo-600"> Your Todos </h1>
            <div class="flex flex-wrap p-5 m-5">
                <!-- <br>
                <h3> Create a new Todo! </h3>
                <input type="text" placeholder="Author" v-model="state.newAuthor">
                <span>Test: {{ state.newAuthor }}</span>
                <br>
                <input type="text" placeholder="Todo" v-model="state.newTodoItem">
                <span>Test: {{ state.newTodoItem }}</span>
                <br>
                <button @click="NewTodo()"> New Todo </button>
                <hr> -->
        
                <div class="px-4 mx-auto bg-yellow-300 max-w-7xl sm:px-6 lg:px-8 w-72 h-72" v-for="todo in state.todos" :key="todo._id">
                    <div class="pt-5 border-b-4 divide-y-4 border-black/25 ">
                        <router-link :to="`/todo/${todo._id}`">
                            <h4 class="text-base">
                                {{ todo.author }}
                            </h4>
                        </router-link>
                    </div>
                    <div>
                        <router-link :to="`/todo/${todo._id}`">
                            <p>
                                {{ todo.todo }}
                            </p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
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