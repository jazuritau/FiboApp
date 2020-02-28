const express = require('express')
const router = express.Router()
const fibo = require('./fibo')

router.get('/fibo/:number', fibo.get)

module.exports = router