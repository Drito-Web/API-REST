const express = require('express');

const productsService = require('../services/products.service');


const router = express.Router();

const service = new productsService();

router.get('/', async (req, res) => {
 const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Hola, soy Un filter')
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
})

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    data: newProduct,
  })
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id, body);
  res.json(
    product
  )
})

router.delete('/:id',async (req, res) => {
  const { id } = req.params;
  const rta = await service.detele(id);
  res.json(rta)
})

module.exports = router;
