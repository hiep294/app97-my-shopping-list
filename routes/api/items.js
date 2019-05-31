const route = require('express').Router()
const Item = require('../../model/Item')

// GET /items/
route.get('/', (req, res) => {
  Item.find().sort({ date: -1 }).then(allItems => res.send(allItems))
})
route.get('/bought', (req, res) => {
  Item.find({ isBought: true }).sort({ date: -1 }).then(allItems => res.send(allItems))
})
route.get('/not-bought-yet', (req, res) => {
  Item.find({ isBought: false }).sort({ date: -1 }).then(allItems => res.send(allItems))
})

// create item
route.post('/', (req, res) => {
  const newItem = new Item(req.body)
  newItem.save().then(createdItem => res.send(createdItem))
})

// delete item
route.delete('/:id', (req, res) => {
  let item = Item.findById(req.params.id)
  item.remove()
    .then(sth => res.send({ success: true }))
    .catch(error => res.status(404).send({ success: false }))
})

// toggle item
route.put('/:id', (req, res) => {
  const item = Item.findById(req.params.id)
  // console.log(newItem)
  item.then(data => {
    item.updateOne({ isBought: !data.isBought })
      .then(sth => res.send({ success: true }))
  })
    .catch(error => res.status(404).send({ success: false }))


})

// update item title
route.patch('/:id/:title', (req, res) => {
  let item = Item.findById(req.params.id)
  item.then(() => {
    item.updateOne({ title: req.params.title })
      .then(sth => res.send({ success: true }))
  })
    .catch(error => res.status(404).send({ success: false }))


})

module.exports = route