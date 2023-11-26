const express = require('express')
const db = require('../db/models/index.js')
const Sequelize = require('sequelize');

const ruta = express.Router()

ruta.get('/adminLeer', async function (req, res) {
   let data = await db.user.findOne(
      {

         attributes: [ 
             'id', 'nombre', 'apellidos', 'tipo_documento','n_documento','correo','contrasenia','imagen','tipo_usuario'],
             where : {
                id : [100]
             }
      }
)
console.log(data)
 res.status(200).json( data );
});

ruta.put('/adminActualizar', async function (req,res) {
    userData = req.body
    console.log("recuperado:", userData)
 
    let data = await db.user.findOne(
      {
         where: {
            id : 100
         }
      }
   )
 
    if ( data != null )  { 
       data = await db.user.update(
         { 
            nombre: userData.nombre || data.nombre,
            apellidos: userData.apellido || data.apellido,
            tipo_documento: userData.tipoDocumento || data.tipo_documento,
            n_documento: userData.nroDocumento || data.n_documento,
            correo: userData.correo || data.correo,
            contrasenia: userData.contraseña || data.contrasenia,
            imagen: userData.imagen || data.imagen,
          },
          {
            where: {
              id: 100
            }
          }
    );
        res.status(200).json( data );
    } else {
       res.status(404).json( data );
    }
 
    })

   ruta.get('/estudianteLeer', async function (req, res) {
        let data = await db.user.findAll(
              {
    
                 attributes: [ 
                     'id', 'nombre', 'apellidos', 'tipo_documento','n_documento','correo','contrasenia','imagen','tipo_usuario'],
                     where : {
                        tipo_usuario : ['estudiante']
                     },
                     order : [
                        ['id' , 'ASC']
                    ],
              }
        )
        console.log(data)
         res.status(200).json( data );
    });

    ruta.put('/estudianteActualizar', async function (req,res) {
        userData = req.body
        console.log(userData)
        let userId = userData["id"]//solo saca el objeto ""
     
        let data = await db.user.findOne(
           {
              where: {
                 id : userId
              }
           }
        )
     
        if ( data != null )  { 
           data = await db.user.update(
               { 
                nombre: userData.nombre || data.nombre,
                apellidos: userData.apellidos || data.apellido,
                tipo_documento: userData.tipo_documento || data.tipo_documento,
                n_documento: userData.n_documento || data.n_documento,
                correo: userData.correo || data.correo,
                contrasenia: userData.contrasenia || data.contrasenia,
                imagen: userData.imagen || data.imagen,
              },{
                where: {
                    id: userId
                }
            }
        );
            res.status(200).json( data );
        } else {
           res.status(404).json( data );
        }
     
        })

module.exports = ruta