// build your `/api/tasks` router here
const router = require('express').Router()
const Tasks = require('./model')

router.get('/', (req ,res) => {
    Tasks.getTasks()
    .then( allTasks => res.status(200).json(allTasks) )
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could not retreive data' })
    })
})

router.post('/', (req ,res) => {
    Tasks.createTasks(req.body)
    .then( newTask => res.status(200).json(newTask) )
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could not post data' })
    })
})

module.exports = router