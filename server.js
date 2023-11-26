const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');

//Registrar apis
const perfiles = require('./api/actualizar_perfil')
const añadirLibro = require('./api/añadir_libro')
const sesionUsuario = require('./api/iniciar_sesion')

const app = express()
const port = 3080

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

app.use('/api/perfilActualizado', perfiles)//front
app.use('/api/recursoAgregado', añadirLibro)
app.use('/api/validar', sesionUsuario)

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});

