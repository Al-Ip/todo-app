import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'


const getTodos = () => {
    const route = useRoute();
    const router = useRouter();

    const todoId = computed(() => route.params.id)

    // state or vuex
    const state = ref({
        newAuthor: '',
        newTodoItem: '',
        todos: {}
    })

    const GetAllTodos = async () => {
        try{
            await fetch("http://localhost:3000/todos/")
            .then(res => res.json())
            .then(data => {
                state.value.todos = data
            })
        }
        catch(error) { console.log(error)}
    }

    const NewTodo = () => {
        try{
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                    //"auth-token": state.token
                },
                body: JSON.stringify({
                    author: state.value.newAuthor,
                    todo: state.value.newTodoItem
                })
            }

            fetch("http://localhost:3000/todos/new", requestOptions)
            router.go(0);
        }
        catch(error) { console.log(error)}
    }

    const EditTodo = () => {
        try{
            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                    //"auth-token": state.token
                },
                body: JSON.stringify({
                    author: state.value.newAuthor,
                    todo: state.value.newTodoItem
                })
            }
            fetch(`http://localhost:3000/todos/update/${todoId.value}`, requestOptions)
            .then(res => res.body)
            router.push('/todos')
        }
        catch(error) { console.log(error)}
    }

    const DeleteTodo = () => {
        try{
            fetch(`http://localhost:3000/todos/delete/${todoId.value}`, { method: "DELETE" })
            router.push('/todos')
        }
        catch(error) { console.log(error)}
    }

    const todo = ref({})
    const GetSpecificTodo = async () => {
        try{
            fetch(`http://localhost:3000/todos`)
            .then(res => res.json())
            .then(data => {
                todo.value = data.filter(t => t._id === todoId.value)
            })
        }
        catch(error) { console.log(error)}
    }

    return { 
        todo,
        todoId,
        GetSpecificTodo,
        state, 
        GetAllTodos, 
        NewTodo, 
        DeleteTodo,
        EditTodo
    }
}

export default getTodos