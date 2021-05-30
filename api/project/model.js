// build your `Project` model here
const db = require('../../data/dbConfig')

const getProjects = () => {
    return db('projects')
}

const createProjects = (project) => {
    return db('projects').insert(project).then(ids => ids[0])
}

module.exports = {
    getProjects,
    createProjects
}