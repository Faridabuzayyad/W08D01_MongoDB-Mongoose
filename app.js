const express = require("express");
const todoModel = require("./schema");
const db = require("./db");

const app = express();
app.use(express.json());


//Practice Q3
app.get("/todos", (req, res) => {
    todoModel.find({})
        .then((allTodos) => {
            res.send(allTodos);
        })
        .catch((error) => {
            res.send(error)
        });
});
//Practice Q1
app.post("/create/todo", (req, res) => {
    const {task, description, deadline, isCompleted, priority} = req.body;
    const todo = new todoModel({task, description, deadline, isCompleted, priority});
    try {
        const todoResult = await todo.save();
        res.json(todoResult);
    } catch (error) {
        res.json(error);
    }
});

//Practice Q4
app.get("/todos/completed", (req, res) => {
    todoModel.find({ isCompleted: true})
        .then((allTodos) => {
            res.send(allTodos);
        })
        .catch((error) => {
            res.send(error)
        });
})

//Practice Q5
app.put("/update/todo", (req, res) => {
    const newTodo = req.send.body;
    todoModel.findOneAndUpdate
});
app.delete("/delete/todo", (req, res) => {
    const newTodo = req.send.body;
    todoModel.findOneAndDelete
});




const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});