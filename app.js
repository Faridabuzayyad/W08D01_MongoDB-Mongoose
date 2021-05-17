const express = require("express");
const todoModel = require("./schema");
const db = require("./db");

const app = express();
app.use(express.json());



app.get("/todos", (req, res) => {});
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
app.put("/update/todo", (req, res) => {});
app.delete("/delete/todo", (req, res) => {});




const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});