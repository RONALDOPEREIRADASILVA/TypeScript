/*Aprendendo sobre Type Assertion e Type cast em TypeScript

O Type Assertion é usado quando você, como desenvolvedor, sabe mais sobre o tipo de uma variável do que o próprio compilador do TypeScript. Ele não altera o dado em si, apenas diz ao compilador: "confie em mim, eu sei o que estou fazendo".

Diferente do assertion, o Typecasting envolve a transformação real do valor de um tipo para outro em tempo de execução (JavaScript puro).

*/
let nvalor:number;
let svalor:string;
let uvalor:unknown;

nvalor=10;
uvalor= 10;
nvalor=<number>uvalor; //convertendo para númerico
svalor=<string>uvalor;//convertendopara string
//svalor+=10;

//nvalor=Number.parseInt(svalor);//convertendo para númerico

svalor=nvalor.toString();//convertendopara string

//console.log(typeof(nvalor));
//console.log(nvalor);


//console.log(typeof(uvalor));
//console.log(uvalor);

console.log(typeof(svalor));
console.log(svalor);