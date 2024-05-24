const mongoose = require('mongoose');
const express = require('express');
const server = express();
const { Schema } = mongoose;
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todoList');
  console.log("Database Connected");
}

const taskSchema = new Schema({
  title: String,
  status: Boolean,
  data: Date
})
const Task = mongoose.model("Task", taskSchema);


server.get('/', (req, res) => {
  const Tasks = Task.find();
  console.log(Tasks)
  res.sendStatus(201);
})
server.post('/', (req, res) => {
  const task = new Task;
  task.title = "first";
  task.status = false;
  task.data = new Date();

  console.log(task)
  res.json(task);
})
server.listen(8080, () => {
  console.log("Listening at 8080.....")
})
