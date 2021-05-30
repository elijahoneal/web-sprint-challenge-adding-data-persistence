// build your `Task` model here
const db = require('../../data/dbConfig')

const getTasks = () => {
    return db('tasks')
}

const createTasks = (task) => {
    return db('tasks').insert(task).then(ids => ids[0])
}

module.exports = {
    getTasks,
    createTasks
}