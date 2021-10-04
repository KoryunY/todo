const mongoose = require("mongoose");
const Schema = mongoose.Schema;
class Task {
    constructor(text) {
        this.text = text;
        this.status = false;
    }
}
const taskSchema = new Schema(Task)

module.exports = mongoose.model("Task", taskSchema)