/*Arrow Function ou Função de Seta em Typescript. Função Anônima

*/
const fsoma = (n:number[]):number=>{
    let s:number=0;
    n.forEach((e)=>{
        s+=e;
    })
    return s;
}
let numer:number[]=[10,12,40];

console.log(fsoma(numer));
