/*
Aprendendo sobre INTERFACE e Objetos Literais em Typescript 
*/

interface curso{
    titulo:string;
    desc:string;
    aulas:number;
    maxAulas?:number;
    iniciarCurso?(teste:string):void;
}
let curso1:cursoProgramacao;
let curso2:cursoProgramacao;
let curso3:cursoArtes;
interface cursoProgramacao extends curso{
    aulas:number;
    maxAulas?:number;

}
interface cursoArtes extends curso{
    aulas:number;
    maxAulas?:number;

}

curso1={titulo:"typescript", desc:"Curso de typescript", aulas:100, maxAulas:50};

curso2={titulo:"java", desc:"curso de java", aulas:120 ,maxAulas: 40};

curso3={titulo:"mysql", desc:"curso de mysql" , aulas:80};;

console.log(curso1);
console.log(curso2);
console.log(curso3);
