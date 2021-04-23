const db = require('../../data/dbConfig')

const getAll = () => {
    return db('users')
}

const getById = (id) => {
    return db('users').where({id})
}

const add = async (file) => {
   const [id] = await db('users').insert(file)
   return getById(id)
}

module.exports = {
    getAll,
    getById,
    add
}