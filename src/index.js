const express = require('express');
const app = express();

// middlewares (funciones que se ejecutan antes de que lleguen a las rutas)
// para que el servidor lea formatos json
app.use(express.json());

//lee las datos de un formulario y lo convierte en objeto
//{extended: false} no acepta datos como una imagen
app.use(express.urlencoded({extended: false}));


//routes
app.use(require('./routes/index'));

//Puerto a usar
app.listen(4000);
console.log('Server on port 4000');
