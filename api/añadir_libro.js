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

ruta.delete('/libroEliminar', async function (req, res) {
   let libro = req.body;
   let data  = await db.resource.destroy(
     {
        where : {
         titulo : libro.titulo,
         autores : libro.autor,
         isbn : libro.isbn,
         tipo : libro.tipo,
        }
     }
   )
});

   ruta.put('/libroModificar', async function (req,res) {
      resourceData = req.body
      console.log(resourceData)
      let resourceId = resourceData["id"]//solo saca el objeto ""
   
      let data = await db.resource.findOne(
         {
            where: {
               id : resourceId
            }
         }
      )

      if ( data != null )  { 
         data = await db.resource.update(
             { 
               titulo : resourceData.titulo || data.titulo,
               autores : resourceData.autor || data.autores,
               isbn : resourceData.isbn || data.isbn,
               tipo: resourceData.tipo || data.tipo
            },{
              where: {
                  id: resourceId
              }
          }
      );
      }
   console.log( data );
   res.end( JSON.stringify(data));
});

module.exports = ruta