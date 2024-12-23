const fs = require('fs');
const { setTimeout } = require('timers');

//1* callbacks

//função assincrona (ler arquivo leva um tempo)

// console.log('antes da função de ler o arquivo');

// fs.readFile('aula-13/arquivo.txt',(erro, conteudoDoArquivo) => {
//     if(erro){
//         console.log("Ocorreu erro ao tentar ler arquivo", erro);
//     } else {
//         console.log(String(conteudoDoArquivo));
//     }
// });

// console.log('depois da função de ler o arquivo');

//exemplo 2 setTimeout (função que cria timer)
//função parametro e , tempo ali colocamos 2 * 1000 = 2 segundos ai ele executa a função do parametro
console.log('antes do timeout');

setTimeout(()=> {
    console.log('Isso é executado apos 2 segundos');
}, 2* 1000)

console.log('depois do setTimeout');