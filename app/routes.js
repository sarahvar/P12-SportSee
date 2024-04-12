const express = require('express')
const idx = require('idx')

const router = express.Router()

const {
    getUserById,
    getUserActivityByIdByIdById,
    getUserAverageSession,
    getUserPerformance
} = require('./models')

const {
    handleNoUserData
} = require('./middleware')


router.get('/user/:id', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserById(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/user/:id/activity', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserActivityByIdByIdById(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/user/:id/average-sessions', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserAverageSession(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/user/:id/performance', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserPerformance(Number(userId))

    return handleNoUserData(res, userData)
})


module.exports = router
