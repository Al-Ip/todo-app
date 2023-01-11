<template>
    <div>
        <h1>Editing Todo</h1>
        
        <div v-for="item in todo" :key="item._id">
            Author: <h4>{{ item.author }}</h4>
            Todo Item: <p>{{ item.todo }}</p>
        </div>

        <hr>
        <input type="text" placeholder="Author" v-model="state.newAuthor">
        <span>Test: {{ state.newAuthor }}</span>
        <br>
        <input type="text" placeholder="Todo" v-model="state.newTodoItem">
        <span>Test: {{ state.newTodoItem }}</span>
        <br>
        <br>
        <button @click="EditTodo()">Update Todo</button>
        <button @click="DeleteTodo()"> Delete Todo </button>
    </div>
</template>

<script>
import todocrud from '../modules/todocrud'

    export default {
        setup() {
            
            const { 
                todo,
                todoId,
                GetSpecificTodo,
                state, 
                EditTodo,
                DeleteTodo
            } = todocrud()

            GetSpecificTodo()

            return {
                todo,
                todoId,
                GetSpecificTodo,
                state,
                EditTodo,
                DeleteTodo
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>