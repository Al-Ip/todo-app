const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// create our express app
const app = express()

// Handle CORS + middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// database stuff
const uri = process.env.MONGO_DB_CONNECTION_STRING;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB Connected")
})
.catch(err => console.log(err))

app.use(bodyParser.json())

// routes
app.get("/", (req, res) => {
    res.send("home page")
})

const TodosRoute = require('./routes/Todos');
app.use('/todos', TodosRoute)

// Start server
app.listen(process.env.MONGO_DB_PORT, () => {
    console.log("Listening at port 3000")
})
