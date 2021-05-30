const projects = [
  {
    project_name: "To Do List",
    project_description: "Custom To Do list with a timer for completing tasks"
  },
  {
    project_name: "Space Ranger",
    project_description: "Retreive data about other planets from NASA's API"
  },
  {
    project_name: "Chat Bot",
    project_description: "An AI chatbot that will interact with people during live streams"
  }
]

exports.projects = projects


exports.seed = function (knex) {
  return knex('projects').insert(projects)
}
