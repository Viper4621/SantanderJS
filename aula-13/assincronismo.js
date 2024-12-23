const fs = require('fs');

//1* callbacks

//função assincrona (ler arquivo leva um tempo)

fs.readFile('aula-13/arquivo.txt',(erro, conteudoDoArquivo) => {
    if(erro){
        console.log("Ocorreu erro ao tentar ler arquivo", erro);
    } else {
        console.log(String(conteudoDoArquivo));
    }
})