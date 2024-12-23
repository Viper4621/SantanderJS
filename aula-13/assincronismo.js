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
// console.log('antes do timeout');

// setTimeout(()=> {
//     console.log('Isso é executado apos 2 segundos');
// }, 2* 1000)

// console.log('depois do setTimeout');

// 2 promisses objeto que guarda a promessa de algo que sera realizado é assincrono
//util para async tem pendding=iniciada e pendente fullfilled=esta fazendo reject=erro
//exemplo de utilização pegar dados de backend(api) = fetch

console.log('antes da criação da promessa')
// const promessa = new Promise((resolve, reject ) => {
//      fs.readFile('aula-13/arquivo.txt',(erro, conteudoDoArquivo) => {
//      if(erro){
//          reject("Ocorreu erro ao tentar ler arquivo", erro);
//      } else {
//          resolve(String(conteudoDoArquivo));
//      }
//  });
// }); 


//foco a partir de abaixo.. no js já vai existir promessa pronta.
// promessa.then((retornoDoResolveDaPromessa) => {
//     console.log('deu certo', retornoDoResolveDaPromessa); 
//  //abaixo catch e para usar para pegar erros   
// }).catch((erro) =>{
//    console.log('deu ruim',erro);
//    //finally independente da promessa der certo ou não vai executar abaixo
// }).finally(() =>{
//     console.log('independente de erro ou sucesso vai mostrar finally');
// })



function lerArquivoPromisse(){
    return new Promise((resolve, reject)=>{
     fs.readFile("aula-13/arquivo.txt",(erro, conteudoDoArquivo) =>{
        if(erro){
            reject("Ocorreu um erro", erro);
        }else {
            resolve(String(conteudoDoArquivo));
        }
     });
    });
}

// lerArquivoPromisse()
// .then((retornoDoResolveDaPromessa) => {
//     console.log('Deu certo', retornoDoResolveDaPromessa);
// })
// .catch((erro) =>{
//     console.log('deu ruim', erro);
// })
// .finally(()=>{
//     console.log('Independente resultado quero que mostra isso');
// })

//async // await

async function leituraDeDados(){
    console.log('Isso é executado antes da promessa ser resolvida');

    try{
     const dadosDoArquivoLido= await lerArquivoPromisse(); // espera o retorno para seguir codigo
    
     console.log(dadosDoArquivoLido);
     console.log('Isso é executado Depois da promessa ser resolvida');
   } catch (err){
    console.log(err)
    console.log('isso aqui é executado depois da promessa com erro.');
   }
}

leituraDeDados();



