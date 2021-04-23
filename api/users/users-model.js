const db = require('../../data/dbConfig')

const getAll = () => {
    return db('users')
}

const getById = (id) => {
    return db('users').where({id}).first()
}

const add = async (file) => {
   const [id] = await db('users').insert(file)
   return getById(id)
}

const edit = async (id,file) => {
    await db('users').where({id}).update(file)
   return getById(id) 
}

module.exports = {
    getAll,
    getById,
    add,
    edit
}