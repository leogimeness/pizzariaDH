const services =require('../services/UsuariosServices');

let usuarioTeste = {
    nome: "Rodrigo",
    email: "Reidelas@gmail.com",
    senha: "123"
}

services.alterar(usuarioTeste,123)
