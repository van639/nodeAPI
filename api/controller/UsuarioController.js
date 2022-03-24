// IMPORTA O MÓDULO DO EXPRESS
const { response } = require('express');
const express = require('express');

// IMPORTA A MODEL DE USÚARIO
const  usuario = require('../model/Usuario');

// CRIA O GERENCIADO DE ROTAS DO EXPRESS PARA O DOMINIO USUARIO
const router = express.Router();

// ROTA HTPP PRA INSERIR USUARIO
router.post('/usuario/inserirUsuario', (req, res)=>{

    console.log(req.body);

    // DESTRUCTION
    const { nome,sobrenome, email, foto, login, senha } = req.body;

    usuario.create({
        nome,
        sobrenome,
        email,
        foto,
        login,
        senha
    }).then(
        res.status(200).json({'MSG':'ROTA DE INSERÇÃO DE USÚARIO'})
    );





});

module.exports = router;