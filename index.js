const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const { loadError, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());


const whitelist = ['http://localhost:5500', 'https://myapp.com', 'http://localhost:8080'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin || !origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}
app.use(cors(corsOptions));

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
