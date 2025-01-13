const express = require('express');
const routerApi = require('./routes');

const { loadError, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());//para recibir en json

app.get('/', (req, res) => {
  res.send("server Express funcionando")
});

app.get('/nueva-ruta',(req, res) => {
  res.send("Hola soy nueva ruta");
});

routerApi(app);


app.use(loadError);
app.use(boomErrorHandler);
app.use(errorHandler);





app.listen(port, () => {
  console.log("Server running port:", port)
});
