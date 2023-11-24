const express = require('express')
const db = require('../db/models/index.js')
const Sequelize = require('sequelize');

const ruta = express.Router()

ruta.get('/libroLeer', async function (req, res) {
   let data = await db.resource.findAll(
      {
         attributes: [ 
             'id', 'titulo', 'autores', 'serie','isbn','tipo'],
      }
)
   console.log(data);
   res.status(200).json(data);
});

ruta.post('/libroGuardar', async function (req, res) {
    let resourceData = req.body
    console.log("libro a guardar",resourceData)
    const result = await db.resource.max('id');
    const ID = result + 1

     data = await db.resource.create(
      {
         id: ID,
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