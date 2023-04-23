const mongoose = require('mongoose')
const app = require('../app')
const supertest = require('supertest')
const { user, newState } = require('./test_helper')

const api = supertest(app)

const User = require('../models/user')

beforeEach(async () => {
    await User.deleteMany({})
})
test('user creation', async () => {
    await api.post('/users')
        .send(user)
        .expect(200)
})
test('login', async () => {
    await api.post('/users')
        .send(user)
        .expect(200)

    const res = await api.post('/login')
        .send({ email: user.email, password: user.password })
        .expect(200)

    expect(res.body.token).toBeDefined()
})
test('state save', async () => {
    await api.post('/users')
        .send(user)
        .expect(200)

    const res = await api.post('/login')
        .send({ email: user.email, password: user.password })
        .expect(200)

    expect(res.body.token).toBeDefined()

    const resState = await api
        .post('/game')
        .set({ Authorization: `Bearer ${res.body.token}` })
        .send(newState)
        .expect(200)

    expect(resState.body).toEqual(newState)
})
afterAll(async () => {
    await mongoose.connection.close()
})