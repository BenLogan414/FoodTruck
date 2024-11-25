
const router = require('express').Router()

const { getCollection, ObjectId } = require('../../../db-connection')

// GET /api/v1/menu - Return a JSON object that contains the menu items for the food truck.
router.get('/menu', async (request, response) => {
    const collection = await getCollection('FoodTruckAPI', 'FoodTruck')
    const found = await collection.find().toArray()
    response.send(found)
})

// GET /api/v1/events - Return a JSON object that contains the events for the food truck.
router.get('/events', async (request, response) => {
    const collection = await getCollection('FoodTruckAPI', 'FoodTruckEvents')
    const found = await collection.find().toArray()
    response.send(found)
})

// GET /api/v1/menu/:id - Return a JSON object that contains the menu item with the specified id.
router.get('/menu/:id', async (request, response) => {
    const { id } = request.params
    const collection = await getCollection('FoodTruckAPI', 'FoodTruck')
    const found = await collection.findOne({ _id: new ObjectId(id) })
    if(!found) response.send({ error: `Cannot find menu item with id: ${id}`})
        else response.send(found)
})

// GET /api/v1/events/:id - Return a JSON object that contains the event with the specified id.
router.get('/events/:id', async (request, response) => {
    const { id } = request.params
    const collection = await getCollection('FoodTruckAPI', 'FoodTruckEvents')
    const found = await collection.findOne({ _id: new ObjectId(id) })
    if(!found) response.send({ error: `Cannot find menu item with id: ${id}`})
        else response.send(found)
})

// POST /api/v1/menu - Add a new menu item to the database.
router.post('/menu', async (request, response) => {
    const { name, description, price, image } = request.body
    const collection = await getCollection('FoodTruckAPI', 'FoodTruck')
    const result = await collection.insertOne({ name, description, price, image })
    response.send(result)
})

// POST /api/v1/events - Add a new event item to the database.
router.post('/events', async (request, response) => {
    const { name, location, date, time } = request.body
    const collection = await getCollection('FoodTruckAPI', 'FoodTruckEvents')
    const result = await collection.insertOne({ name, location, date, time })
    response.send(result)
})

module.exports = router