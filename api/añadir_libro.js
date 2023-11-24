const express = require('express')
const db = require('../db/models/index.js')
const Sequelize = require('sequelize');

const ruta = express.Router()

ruta.get('/libroLeer', async function (req, res) {
   const data = await db.resource.findAll();
   console.log(data);
   res.status(200).json(data);
    console.log(data)
     res.status(200).json( data );
});

ruta.post('/libroAñadir', async function (req, res) {
    resourceData = req.body
    console.log(user)

     data = await db.resource.create(
      {
         titulo : resourceData.titulo,
         autores : resourceData.autor,
         isbn : resourceData.isbn,
         tipo: resourceData.tipo
      }
   )

    console.log( data );
    res.status(200).json( data );
});

module.exports = ruta