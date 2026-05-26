/**
 * Entendendo Namespace em Typescript *
 * Hoje em nosso curso de Typescript vamos entender como *trabalhar com Namespace em Typescript. 
*Um espaço de nomes é um delimitador abstrato que fornece um *contexto para os itens que ele armazena, o que permite uma *desambiguação para itens que possuem o mesmo nome mas que *residem em espaços de nomes diferentes.

*Um namespace serve para fornecer uma maneira de manter um *conjunto de nomes separado de outro. Os nomes de classe *declarados em um namespace não entram em conflito com os mesmos *nomes de classe declarados em outro
*Em TypeScript, generics são uma característica que permite criar *componentes (funções, classes, interfaces) que podem operar em *vários tipos de dados, sem perder a informação sobre esses *tipos. Isso proporciona flexibilidade e reutilização de código, *uma vez que você pode escrever código que é independente do tipo *específico, mas ainda mantém a segurança de tipo.
* */
namespace Veiculos{
  enum Cores{"preto","Branco", "Vermelho"," Azul","Prata"}
  export abstract class  Carro{

   private nome:string;
   private motor:Motores.Motor;
   private cor:string;
    constructor(nome:string ,motor:Motores.Motor, cor:Cores){
        this.nome=nome;
        this.motor=motor;
        this.cor=Cores [cor];
    }
    public ligar(){
        this.motor.ligar=true
    }
    public desliga(){
        this.motor.ligar=false;
    }
    get minhaCor(){
        return this.cor;
    }
    get nomeCarro(){
        return this.nome;
    }
    get estouLigado(){
        return (this.motor.ligar?"Sim":"Não");
    }
    get minhaPotencia(){
        return this.motor.potencia;
    }
}
 export class CarroEsportivo extends Carro{
    constructor(nome:string, cor:Cores,){
        super(nome,new Motores.Motor(6,300,new Motores.Turbo(100)), 2 )
    }

 }
 export class CarroPopular extends Carro{
    constructor(nome:string, cor:Cores,){
        super(nome,new Motores.Motor(3,100,), 2 )
    }

 }
}

 namespace Motores{
    export class Turbo{
        private pot:number;
        constructor(pot:number){
            this.pot=pot;
        }
        get potencia(){
            return this.pot
        }
    }
   export class Motor{
    private ligado:boolean
    private cilindro:number
    private pot:number
    constructor(cilindro:number , pot:number , turbo?:Turbo){
        this.ligado=false
        this.cilindro=cilindro
        this.pot=pot + (turbo?turbo.potencia:0)
    }




   set ligar(ligado:boolean) {
      this.ligado=ligado
    }
    get ligar (){
        return this.ligado
    }
    get potencia(){
        return this.pot
    }
    
}
}
const carro1 = new Veiculos.CarroEsportivo("Raid",2);
const carro2 = new Veiculos.CarroPopular("ford",0);
carro1.ligar();
carro2.ligar();


console.log(`Nome: ${carro1.nomeCarro}`)
console.log(`Cor: ${carro1.minhaCor}`)
console.log(`Potencia: ${carro1.minhaPotencia}`)
console.log(`Ligado: ${carro1.estouLigado}`)
console.log("----------------------------------------")
console.log(`Nome: ${carro2.nomeCarro}`)
console.log(`Cor: ${carro2.minhaCor}`)
console.log(`Potencia: ${carro2.minhaPotencia}`)
console.log(`Ligado: ${carro2.estouLigado}`)