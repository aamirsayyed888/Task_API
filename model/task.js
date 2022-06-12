const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    Title : {
        type: String,
        required: true
    },
    Message : {
        type: String,
        required: true
    },
    categoryId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, { timestamps: true });

const Task = mongoose.model("tasks", TaskSchema);

module.exports = Task;