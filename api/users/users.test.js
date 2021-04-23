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
    describe("[GET] /api/users",() => {
        it('returns an empty database',async() => {
          const check = await request(server).get('/api/users')
          expect(check.body.length).toBe(0)
        })
        it('responds with status 200 ok', async() => {
          const check = await request(server).get('/api/users')
          expect(check.status).toBe(200)
        })
        it('returns correct data when added a user', async() => {
            await db('users').insert(frodo)
            let res = await request(server).get('/api/users')
            expect(res.body).toHaveLength(1)
            expect(res.body[0]).toMatchObject({id:1,...frodo})
            await db('users').insert(sam)
            res = await request(server).get('/api/users')
            expect(res.body.length).toBe(2)
            expect(res.body[1]).toMatchObject({id:2,...sam})
        })
    })
})