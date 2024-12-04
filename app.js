
const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(express.json())

app.use('/api/v1', require ('./routes/api/v1/truck.js'))
app.use('/', require('./routes/static.js'))

app.listen(port, () => console.log(`Listening on port ${port}.`))