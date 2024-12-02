
const router = require('express').Router()
const path = require('path')
const root = path.join(__dirname, '..', 'public')

router.get('/', (_, response) => response.sendFile('index.htm', { root }))
router.get('/admin',(_,response)=>response.sendFile('admin.htm',{root}))
router.get('/event/:id', (_, response) => response.sendFile('event.htm', { root }))

module.exports = router