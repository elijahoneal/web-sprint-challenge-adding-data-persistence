const resources = [
  {
   resource_name: "React",
   resource_description: "You will need the React library for this project"
  },
  {
   resource_name: "Axios",
   resource_description: "Retreive data using axios for this project"
  },
  {
   resource_name: "Redux",
   resource_description: "Organize and control state using Redux for this project"
  }
]

exports.projects = resources


exports.seed = function (knex) {
  return knex('resources').insert(resources)
}