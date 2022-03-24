// IMPORTA O MÓDULO DO EXPRESS
const { response } = require('express');
const express = require('express');

// IMPORTA A MODEL DE USÚARIO
const  usuario = require('../model/Usuario');

// CRIA O GERENCIADO DE ROTAS DO EXPRESS PARA O DOMINIO USUARIO
const router = express.Router();

// ROTA HTPP PRA INSERIR USUARIO
router.post('/usuario/inserirUsuario', (req, res)=>{

res.status(200).json({'MSG':'ROTA DE INSERÇÃO DE USÚARIO'});

});

module.exports = router;