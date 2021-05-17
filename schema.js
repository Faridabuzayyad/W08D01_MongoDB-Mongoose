const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: {type: String, required: true , unique: true},
    description: {type: String},
    deadline: {type: Date, required: true},
    isCompleted: {type: Boolean, required: true},
    priority: {type: Number},
});

module.exports = mongoose.model("Todo", todoSchema);