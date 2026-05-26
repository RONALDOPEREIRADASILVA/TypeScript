/*Trabalhando com Módulos em Typescript

Vamos aprender a programar em arquivos diferentes, a fim que deixar nosso programa mais organizado.

Em TypeScript, generics são uma característica que permite criar componentes (funções, classes, interfaces) que podem operar em vários tipos de dados, sem perder a informação sobre esses tipos. Isso proporciona flexibilidade e reutilização de código, uma vez que você pode escrever código que é independente do tipo específico, mas ainda mantém a segurança de tipo.

*/ 

import { Coisas,Pessoa,Objeto } from "./Class30-31.js";

const p1 = new Pessoa("Bom dia", 1.65);
const O1 = new Objeto("Mere");


console.log(p1.nome)
console.log(Coisas)
console.log(O1.nome)