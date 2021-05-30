
const tasks = [
  {
    task_description: "Initialize Project",
    task_notes: "Create your React App and download all the necessary dependencies",
    project_id: 1
  },
  {
    task_description: "Create Endpoints",
    task_notes: "Access the database using CRUD operations",
    project_id: 1
  },
  {
    task_description: "Project should be able to send and retrieve data",
    task_notes: "Commit your code often",
    project_id: 1
  }
]

exports.tasks = tasks


exports.seed = function (knex) {
  return knex('tasks').insert(tasks)
}