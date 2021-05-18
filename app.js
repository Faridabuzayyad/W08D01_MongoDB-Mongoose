const express = require("express");
const todoModel = require("./schema");
const db = require("./db");

const app = express();
app.use(express.json());


//Practice Q3
app.get("/todos", async (req, res) => {
    const todoDocument = await todoModel.find({})
    try {
        res.json(todoDocument);
    } catch (error) {
        res.json(error);
    }
});
//Practice Q1
app.post("/create/todo", async (req, res) => {
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
app.get("/todos/completed", async (req, res) => {
    const completedTodos = await todoModel.find({isCompleted: true})
    try {
        res.json(completedTodos);
    } catch (error) {
        res.json(error);
    }
})

//Practice Q5
app.put("/update/todo", async (req, res) => {
    const {description, deadline, isCompleted, priority} = req.body;
    const taskToUpdate = req.body.task;
    const options = {"new" : true};
    const itemAfterUpdate = await todoModel.findOneAndUpdate(taskToUpdate,{description, deadline, isCompleted, priority}, options);
    try {
        res.json(itemAfterUpdate);
    } catch (error) {
        res.json(error);
    }
});


//Practice Q6
app.delete("/delete/todo", async (req, res) => {
    const taskToDelete = req.body.task;
    const deletedItem = await todoModel.findOneAndDelete(taskToDelete);
    try {
        res.json(deletedItem);
    } catch (error) {
        res.json(error);
    }
});




const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});