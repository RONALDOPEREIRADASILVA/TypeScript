/*
Entendendo HERANÇA em Typescript
*/

class Conta{
    //Public:acessado de qualquer lugar
    //Private:Acessado somente na sua própia class
    //Protected:Acessada somente na sua própia class e nas class fihlo 
    protected numero:number;
    protected titular:string;
    private saldoConta:number;

    constructor(titular:string){
        this.numero=this.gerarNumeroConta();
        this.titular=titular;
        this.saldoConta=0;
    }
    private gerarNumeroConta():number{
        return Math.floor(Math.random()*1000000)+1
    }
    protected info(){
        console.log(`Titular: ${this.titular}`)
        console.log(`Numero:${this.numero}`)
        
    }
    public saldo():number{
      return this.saldoConta
    }
    protected deposito(valor:number){
         if(valor<0){
            console.log(`Valor invalido`)
            return
        }
        this.saldoConta+=valor
    }
    protected saque(valor:number){
        if(valor<0){
            console.log(`Valor invalido`)
            return
        }
        if(valor <= this.saldoConta){
            this.saldoConta-=valor
        }else{
        console.log(`Saldo insuficiente`)
        }
    }
}
class ContaPF extends Conta{
    cpf:number;

    constructor(cpf:number,titular:string){
        super(titular);
        this.cpf=cpf;
    }
     info(){
        super.info();
        console.log(`cpf: ${this.cpf}`)
        console.log(`Saldo: ${this.saldo()}`)
        console.log("-".repeat(40))
    }
     public deposito(valor:number){
        if(valor>1000){
            console.log(`Valor do deposito muito alto pra esse tipo de conta`)
        }else{
            super.deposito(valor)
        }
        
    }
    public saque(valor:number){
        if(valor>1000){
            console.log(`Valor do saque muito alto pra esse tipo de conta`)
        }else{
            super.saque(valor)
        }
    }  
}

class ContaPJ extends Conta{
    cnpj:number;

    constructor(cnpj:number,titular:string){
        super(titular);
        this.cnpj=cnpj;
    }
     info() {
        super.info();
        console.log(`cnpj: ${this.cnpj}`)
        console.log(`Saldo: ${this.saldo()}`)
        console.log("-".repeat(40))
    }
    public deposito(valor:number){
        if(valor>10000){
            console.log(`Valor do deposito muito alto pra esse tipo de conta`)
        }else{
            super.deposito(valor)
        }
    }  
    public saque(valor:number){
        if(valor>10000){
            console.log(`Valor do saque muito alto pra esse tipo de conta`)
        }else{
            super.saque(valor)
        }
    }  

}
const cont1 = new ContaPF( 651234987 , "Ramon");
const cont2 = new ContaPJ(98762987345,"Bruno");
cont1.deposito(900);
cont2.deposito(2000);

cont1.saque(100);
cont2.saque(1000);
//console.log(cont1.titular);
//console.log(cont1.numero);
cont1.info();
cont2.info();
//console.log(cont1.saldo());
//console.log(cont2.saldo());