const request = require('supertest')
const db = require('../../data/dbConfig')
const server = require('../server')

const frodo = {name:"Frodo"}
const sam = {name:"Sam"}

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async ()=>{
    await db('users').truncate()
})
afterAll(async ()=> {
    await db.destroy()
})

describe('server', () => {
    it('returns empty database',async() => {
      const check = await request(server).get('/api/users')
      expect(check.body.length).toBe(0)
      expect(check.status).toBe(200)
    })
})