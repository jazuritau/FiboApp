const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
const routes = require('./routes')

//middleware de bodyparser y CORS
app.use(express.json())
app.use(cors())

//routes
app.use('/api/v1', routes)



app.listen(port, function() {
    console.log(`Listening http://localhost:${port}`)
})
