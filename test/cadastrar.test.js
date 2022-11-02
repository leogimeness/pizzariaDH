const services =require('../services/UsuariosServices');

let usuarioTest = {
        nome: "Mel",
        email: "email@dousuario.com",
        senha: "234",
        enderecos: ["curitiba, nº 256. Usuariolândia-BA"]
    }

services.cadastrar(usuarioTest);