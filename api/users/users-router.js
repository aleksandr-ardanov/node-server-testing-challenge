const router = require('express').Router()
const Users = require('./users-model')

router.get('/',(req,res,next) => {
    Users.getAll()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            next(err)
        })
})

router.get('/:id',(req,res,next) => {
    const {id} = req.params
    Users.getById(id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            next(err)
        })
})

router.post('/', (req,res,next) => {
    Users.add(req.body)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            next(err)
        })
})


module.exports = router