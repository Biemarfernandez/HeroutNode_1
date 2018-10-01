'use strict';

const Router = require('express').Router();
//const  Users = require('../models/models');

Router.get('/', (req, res) => {
    res.sendFile('index.html');
})

// Login de acceso
Router.post('/login', function (req, res) {
    let username = req.body.username
    Users.findOne({username: username}, (err, user) => {
      if(user){
        if(user.password==req.body.password){
            res.json({
                message: "Acceso concedido",
                error: false
            })
        }else{
              res.json({
                message: `Contraseña incorrecta para ${user.username}`,
                error: true
             })
        }

      }else{
        res.json({
            message: `No se encontro el usuario ${req.body.username}`,
            error: true
        })
        
       }
    });
})

// Agregar a un usuario
Router.post('/registro', (req, res) => {
    let user = new Users({
        userId: Math.floor(Math.random() * 50000),
        username: req.body.username,
        gmail: req.body.gmail,
        password: req.body.password,
        sexo: req.body.sexo
    })
    user.save(function(error) {
        if (error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro guardado")
    })

});

module.exports = Router