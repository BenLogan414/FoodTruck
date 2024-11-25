
const express = require('express')
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(express.json())

app.use('/api/v1', require ('./routes/api/v1/truck.js'))
app.use('/', require('./routes/static'))

app.listen(port, () => console.log(`Listening on port ${port}.`))