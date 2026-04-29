/* Aprendendo sobre P.O.O
Método Construtor em Typescript
 CLASSE: É o molde/projeto do que queremos criar. 
Aqui, definimos que todo "Curso" terá três tipos de horas.
*/


class Cursos {
    // Propriedades (as "gavetas" onde guardamos as informações do objeto)
    javaHoras:number=0;
    mysqlHoras:number=0;
    javascriptHoras:number=0;

     
    /* CONSTRUTOR: O "portal de nascimento" do objeto.
     Ele recebe os valores de fora e os guarda dentro do objeto usando o 'this'.
     Roda apenas UMA vez, quando você usa o comando 'new'.
    */
    constructor(javaHoras:number,mysqlHoras:number ,javascriptHoras:number){
        this.javaHoras=javaHoras;// Guarda o valor recebido na gaveta de Java
        this.mysqlHoras=mysqlHoras;// Guarda o valor recebido na gaveta de MySQL
        this.javascriptHoras=javascriptHoras;// Guarda o valor recebido na gaveta de JS
    }

    /* MÉTODO: É uma função que o objeto sabe fazer.
     Diferente do construtor, você pode chamar o método quantas vezes quiser.
     O ': number' no final indica que esta função vai nos devolver um número.
    */
    calculoHoras():number{
        // O 'return' envia o resultado da soma para quem chamou o método
        return this.javaHoras + this.mysqlHoras + this.javascriptHoras;
    }

}
// --- USANDO A CLASSE (INSTANCIAÇÃO) ---

/* 'new Cursos(...)': Aqui estamos usando o molde para criar objetos REAIS.
   Cada 'sala' é um objeto independente com seus próprios valores.
*/

const sala1= new Cursos(30,18,20);// Cria a sala 1 com essas horas específicas
const sala2 = new Cursos(30,40,60)
const sala3 = new Cursos(10,20,30);


// --- EXIBINDO OS RESULTADOS ---

/* Chamamos o método 'calculoHoras()' através do objeto (sala1.metodo).
   Usamos `${}` (Template String) para colocar o resultado dentro do texto.
*/
    console.log(`A sala 1 tem o total de ${sala1.calculoHoras()} horas`);

