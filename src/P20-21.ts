/*
Entendendo HERANÇA em Typescript
*/

class Conta{
    public numero:number;
    public titular:string;

    constructor(titular:string){
        this.numero=this.gerarNumeroConta();
        this.titular=titular;
    }
    gerarNumeroConta():number{
        return Math.floor(Math.random()*1000000)+1
    }
}
class ContaPF extends Conta{
    cpf:number;

    constructor(cpf:number,titular:string){
        super(titular);
        this.cpf=cpf;
    }


}

class ContaPJ extends Conta{
    cnpj:number;

    constructor(cnpj:number,titular:string){
        super(titular);
        this.cnpj=cnpj;
    }
}
const cont1 = new ContaPF( 651234987 , "Ramon");
const cont2 = new ContaPJ(98762987345,"Bruno");

console.log(cont1.titular);
console.log(cont1.numero);