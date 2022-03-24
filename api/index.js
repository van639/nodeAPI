/** IMPORTA O PACOTE EXPRESS **/
const express = require('express');

/** INSTANCIA O PACOTE EXPRESS **/
const app = express();

/** CONFIGURAÇÃO DO EXPRESS PARA MANIPULAÇÃO DO FORMATO JSON **/ 
app.use(express.json());
app.use(express.urlencoded({extended:true}))

/** IMPORTA OS ARQUIVOS DE MODEL **/
// const usuario = require('./model/Usuario');

/** IMPORTA A CONTROLLER DE USÚARIO */
const usuarioController = require('./controller/UsuarioController');

/** CONFIGURA NO EXPRESS A ROTA DE USÚARIO **/
app.use('/', usuarioController);

/** SERVIDOR AUTO-CONTIDO DO EXPRESS 
    RECEBE AS REQUISIÇÕES E DEVOLVE AS RESPOSTAS

    PARAMENTRO DE listen:
    1 - PORTA LÓGICA
    2 - CALLBACK
 * **/
app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO NA URL: http://localhost:3000');
    console.log('TESTE3');
});