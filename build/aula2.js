"use strict";
/*
Na aula de hoje vamos aprender sobre UNION TYPES em typescript,
que basicamente é o processo de união de tipos  diferentes para a mesma   variáveis , com union types podemos por exemplo declarar uma variável que possa armazenar dados de tipos diferentes.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let vtest;
vtest = [43, "caio", "Maria", 1983,];
let curso = ["Java", "typescript", "mysql"];
curso.push("javascript");
vtest.push("Romario");
console.log(vtest);
console.log(curso);
