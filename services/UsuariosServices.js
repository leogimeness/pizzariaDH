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
    
    var usuarioSelecionado = usuarios.find(u => idUsuario === u.id);

    console.log("Nome: " + usuarioSelecionado.nome);
    console.log("Email: " + usuarioSelecionado.email);

    console.log("\nEndereços:");
    console.table(usuarioSelecionado.enderecos);

    console.log("\nFormas de Pagamento");
    console.table(usuarioSelecionado.formasDePagamento);
}

function remover(idDoUsuarioParaRemover){

    let index = usuarios.findIndex(index => index.id === idDoUsuarioParaRemover);
    usuarios.filter (u =>
        {
            if (idDoUsuarioParaRemover === u.id){
            usuarios.splice(index,1);
            }
        })
    salvar(usuarios);
}

function alterar(novosDados, idUsuario){
    
    var usuarioSelecionado = usuarios.find(u => idUsuario === u.id);
    
    usuarioSelecionado.nome = novosDados.nome;
    usuarioSelecionado.email = novosDados.email;
    usuarioSelecionado.senha = bcrypt.hashSync(novosDados.senha,10)

    usuarios.push(usuarioSelecionado);
    salvar(usuarios);
}

function addEndereco(novoEndereco, idUsuario){
    
    var usuario = usuarios.find(usuario => idUsuario === usuario.id);
    
    usuario.enderecos.push(novoEndereco)
    salvar(usuarios);

    
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