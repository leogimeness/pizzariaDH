const usuarios = require('../databases/usuarios.json');
const fs = require('fs');
const bcrypt = require('bcrypt');

function listar(){

    console.table(usuarios.map(u => {
        return { 
            id: u.id,
            nome: u.nome,
            email: u.email
        }
    }))
}

function salvar(arrayDeUsuarios){
    
    fs.writeFileSync("./databases/usuarios.json",JSON.stringify(arrayDeUsuarios,null,4));

}

function cadastrar(objeto){

    let uniqueId = usuarios[usuarios.length - 1].id + 1;

    let usuario = {
        id: uniqueId,
        nome: objeto.nome,
        email: objeto.email,
        senha: bcrypt.hashSync(objeto.senha,10),
        endereco: objeto.endereco,
        formasDePagamento: []
    }
    usuarios.push(usuario);
    salvar(usuarios);
}

function detalhar(idUsuario){
// Seu código aqui
}

function remover(idDoUsuarioParaRemover){
    // Seu código aqui
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

const UsuariosServices = {
    cadastrar,
    listar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;