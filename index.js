const fs = require('fs');

// fs.readFile('package.json', (erro, dados) =>{
//     if(erro){
//         console.log('Erro:', erro);
//     } else {
//         //conversão de dados para string
//         //ou podemos converter em um objeto JS
//         //(JSON.parse(dados));
//         // const dadosObjeto = JSON.parse(dados); //convertendo o buffer em um objeto do JS
//         // console.log(dadosObjeto.dependencies);
//         console.log(String(dados));
//         console.log(typeof dados);
//     }
// })
// convertendo JSON em formato de string para objeto
const jsonString = '{"nome": "Erick"}';
console.log(JSON.parse(jsonString));
//converter um objeto do JS em um json (string)
const pessoa = {
    nome: "tony stark",
    papel: "homem de ferro",
};

//conversão para string abaixo
console.log(JSON.stringify(pessoa));
//ok