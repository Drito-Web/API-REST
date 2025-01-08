const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {

  res.send("server Express funcionando")

})
app.get('/nueva-ruta',(req, res) => {
  res.send("Hola soy nueva ruta");
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: "Producto 1",
      price: 2300
    },
    {
      name: "Producto 2",
      price: 1300
    }
  ]);
});

app.get('/products/:id', (req, res) => {

  const { id } = req.params;

  res.json({
    id,
    name: "Producto 2",
    price: 1300
  });

} )

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
