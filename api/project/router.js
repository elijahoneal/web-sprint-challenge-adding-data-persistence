// build your `/api/projects` router here
const router = require('express').Router()
const Projects = require('./model')

router.get('/', (req ,res) => {
    Projects.getProjects()
})

module.exports = router