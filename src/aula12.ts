/*Funções em Typescript
1. A Estrutura de uma Função no TypeScript
Diferente do JavaScript puro, no TypeScript precisamos definir dois pontos cruciais na assinatura da função:

*Tipo dos Parâmetros: O que a função recebe.

*Tipo de Retorno: O que a função entrega de volta.

**Exemplo de Função sem Retorno (void):
Se a função apenas executa uma tarefa (como um console.log) e não devolve nenhum dado para ser usado depois, o tipo de retorno é void

2. Funções com Retorno de Dados
Quando queremos que a função calcule algo e nos devolva o resultado, especificamos o tipo após os parênteses.

Exemplo de Soma: Uma função que recebe dois números e retorna um número

Se você definir que a função retorna um number, o compilador vai te obrigar a usar a palavra-chave return devolvendo um valor numérico

*/

function test():void{ //quando não retorna nada o retono é void
    console.log("ola Ronaldo");

};

function logar(user:string, pass:string):void{
    console.log(`User...:${user}`);
    console.log(`senha: ${pass}`);
}

function soma(n1:number,n2:number) :number{
    let r = n1 *n2;
    return r;

}
let nres  :number =soma(2,30);
let sres : string =soma(3,2).toString();

console.log(nres);
console.log(sres);

//chama a função
logar('Ronaldo', '123');
logar('paula','234');

test();