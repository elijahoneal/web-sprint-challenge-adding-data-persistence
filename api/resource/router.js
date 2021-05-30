// build your `/api/resources` router here
const router = require('express').Router()
const Resources = require('./model')

router.get('/', (req ,res) => {
    Resources.getResources()
    .then( allResources => res.status(200).json(allResources) )
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could not retreive data' })
    })
})

router.post('/', (req ,res) => {
    Resources.createResources(req.body)
    .then( newResource => res.status(200).json(newResource) )
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could not post data' })
    })
})

module.exports = router