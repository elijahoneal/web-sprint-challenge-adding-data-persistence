// build your `Resource` model here
const db = require('../../data/dbConfig')

const getResources = () => {
    return db('resources')
}

const createResources = (resource) => {
    return db('resources').insert(resource).then(ids => ids[0])
}

module.exports = {
    getResources,
    createResources
}