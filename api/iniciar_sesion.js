const express = require('express')
const db = require('../db/models/index.js')
const Sequelize = require('sequelize');

const ruta = express.Router()

ruta.get('/leeUsuarios', async function (req, res) {
    let data = await db.user.findAll()
    console.log(data)
     res.status(200).json( data );
});

module.exports = ruta