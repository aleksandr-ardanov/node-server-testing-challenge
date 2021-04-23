const db = require('../../data/dbConfig')

const getAll = () => {
    return db('users')
}

module.exports = {
    getAll
}