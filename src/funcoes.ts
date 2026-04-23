/*Parâmetros Padrões e Opcionais.

Hoje em nosso curso de Typescript vamos continuar a aprender sobre funções em Typescript. Especificamente vamos aprender sobre parâmetros default

*/
function soma(n1:number=0, n2:number=0):number{
    return n1+n2;
}
 
console.log(soma(5,5));

function novoUser(user:string,pass:string,nome?:string):void{
    let dados={user,pass,nome}
    console.log(dados);
}
novoUser('br', '123');