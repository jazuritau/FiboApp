const express = require('express')
const router = express.Router()
const get = require('./fibo')

router.get('/fibo/:number', get)

module.exports = router