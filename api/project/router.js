// build your `/api/projects` router here
const router = require('express').Router()
const Projects = require('./model')

router.get('/', (req ,res) => {
    Projects.getProjects()
    .then( allProjects => res.status(200).json(allProjects) )
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could not retreive data' })
    })
})

router.post('/', (req ,res) => {
    Projects.createProjects(req.body)
    .then( newProject => res.status(200).json(newProject) )
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could not post data' })
    })
})

module.exports = router