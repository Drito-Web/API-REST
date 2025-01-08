const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {

  res.send("server Express funcionando")

})
app.get('/nueva-ruta',(req, res) => {
  res.send("Hola soy nueva ruta");
});

app.get('/productos', (req, res) => {
  res.json({
    name:"Producto 1",
    price: 300
  });
});


app.listen(port, ()=> {

  console.log("Server running port:", port);

})
