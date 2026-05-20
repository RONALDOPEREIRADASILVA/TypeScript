/*
*Aprendendo sobre INTERFACE e Objetos Literais em Typescript 
*1. O que é uma Interface?
Pense na interface como um contrato ou uma forma de bolo. Ela não cria nada sozinha, mas define as regras: quais propriedades um objeto deve ter e de qual tipo elas são (texto, número, etc.). No seu caso, você definiu que qualquer objeto do tipo curso precisa seguir esse molde.
*2. A Propriedade Opcional (?)
Repare que em maxAulas?: number, existe uma interrogação. Isso diz ao TypeScript: "Olha, a propriedade maxAulas pode ou não existir no objeto. Se o usuário não colocar, está tudo bem." É por isso que o curso3 funciona perfeitamente mesmo sem essa informação.
*3. Objetos Literais
São as variáveis curso1, curso2 e curso3. Quando você usa as chaves { ... } para preencher os dados de cada curso de forma direta, você está criando um objeto literal que obedece à interface curso.

*/
// 1. DEFINIÇÃO DA INTERFACE (O contrato/molde do objeto)
interface curso{
    titulo:string;// Obrigatório: Deve ser um texto
    desc:string;// Obrigatório: Deve ser um texto
    aulas:number;// Obrigatório: Deve ser um número
    maxAulas?:number;// OPCIONAL (?): Pode ser um número ou não ser informad
}

// 2. DECLARAÇÃO DAS VARIÁVEIS
// Aqui dizemos ao TypeScript que essas variáveis vão seguir o molde da interface "curso"
let curso1:curso;
let curso2:curso;
let curso3:curso;

// 3. CRIAÇÃO DOS OBJETOS LITERAIS (Preenchendo os dados)

// curso1: Informou todas as propriedades básicas (maxAulas foi cortado na imagem, mas está lá)
curso1={titulo:"typescript", desc:"Curso de typescript", aulas:100, maxAulas:50};
// curso2: Informou todas as propriedades, incluindo a opcional maxAulas
curso2={titulo:"java", desc:"curso de java", aulas:120 ,maxAulas: 40};
// curso3: Não informou a propriedade 'maxAulas'. 
// Funciona perfeitamente porque usamos a interrogação (?) na interface!
curso3={titulo:"mysql", desc:"curso de mysql" , aulas:80};;

// 4. EXIBIÇÃO NO TERMINAL
// Mostra o resultado de cada objeto na tela
console.log(curso1);
console.log(curso2);
console.log(curso3);
