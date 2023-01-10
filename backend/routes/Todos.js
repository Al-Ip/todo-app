const express = require('express')
const router = express.Router();
const Todo = require('../models/Todos')

// Get all Todo routes
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos)
})

// Create new Todo
router.post('/new', async (req, res) => {
    const newTodo = new Todo(
        {
            author: "Flanders",
            todo: "Go to canada"
        }
    );
    const savedTodo = await newTodo.save();
    res.json(savedTodo)
})

// Get a Todo by Id
router.get('/get/:id', async (req, res) => {
    const todo = await Todo.findById({ _id: req.params.id });
    res.json(todo)
})

// Delete a Todo by Id
router.delete('/delete/:id', async (req, res) => {
    const deletedTodo = await Todo.findByIdAndDelete({ _id: req.params.id });
    res.json(deletedTodo)
})

// Delete a Todo by Id
router.put('/update/:id', async (req, res) => {
    const updatedTodo = await Todo.updateOne(
        {
            author: "Bart",
            todo: "Skating"
        }
    );
    res.json(updatedTodo)
})


module.exports = router