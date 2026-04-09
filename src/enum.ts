/*
Hoje no curso de Typescript vou aprender sobre ENUM em Typescript, que é o enumerador onde podemos associar uma chave com um valor.

Em programação, uma enumeração é um tipo de dado abstrato, cujos valores são atribuídos a exatamente um elemento de um conjunto finito de identificadores escolhidos pelo programador. Esse tipo é geralmente usado para variáveis categóricas, que não possuem uma ordem numérica definida
*/

enum dias{
    domingo=0,
    segunda=1,
    terca=2,
    quarta=3,
    quinta=4,
    sesta=5,
    sabado=6
}

enum tipoUsuario{
    USER=19,
    ADMIN=876,
    SUPER=934,
    FRASE=" fim do programa"
}
console.log(dias.quarta);
console.log(dias[5]);
console.log(tipoUsuario.ADMIN);
console.log(tipoUsuario.SUPER);
console.log(tipoUsuario.FRASE);