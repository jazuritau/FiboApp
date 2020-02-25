const { Router } = require('express')
const router = Router()
const fibo = require('./fibo')

router.get('/fibo/:number', fibo.get)

module.exports = Router