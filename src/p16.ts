/* Aprendendo sobre P.O.O. Classes

Hoje em nosso curso de Typescript vamos começar a aprender sobre Programação Orientada a Objetos (P.O.O.) em Typescript, vamos aprender os primeiros conceitos sobre classes em Typescript.

*/

class Computador{
   nome:string="";
   ran: number=0;
   cpu: number=0;
   ligado:boolean=false;
}
const comp1 =new Computador();
const comp2  = new Computador();
const comp3 = new Computador();

comp1.nome="Ronaldo";
comp2.nome="Paula";
comp3.nome="Bia";

console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);