const express = require('express')
// const { faker } = require('@faker-js/faker')
const faker = require('faker')


const app = express();
const port = 3000;

app.get('/', (req, res) => {

  res.send("server Express funcionando")

})
app.get('/nueva-ruta',(req, res) => {
  res.send("Hola soy nueva ruta");
});

app.get('/products', (req, res) => {

  const products = [];
  for (let index = 0; index < 100; index++) {

    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }

  res.json(products);
});

app.get('/products/:id', (req, res) => {

  const { id } = req.params;

  res.json({
    id,
    name: "Producto 2",
    price: 1300
  });

} )

// GET: parámetros query
app.get('/users', (req, res) => {

  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send("No hay params")
  }

})

app.get('/categories/:categoriesId/products/:productsId', (req, res) => {

  const { categoriesId, productsId } = req.params;

  res.json({
    categoriesId,
    productsId
  });

})









app.listen(port, ()=> {

  console.log("Server running port:", port);

})
