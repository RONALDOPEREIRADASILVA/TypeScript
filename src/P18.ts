/*
Métodos de classes em Typescript

*/
class Computador{
    //define as características 
   name:string;
   ram: number;
   cpu: number;
   ligado:boolean;

   constructor(nome:string,ram:number,cpu:number){
    //o construtor é o que "nasse" o objeto.
    //inicializa o objeto com os valores que você passa
    this.name=nome;
    this.ram=ram;
    this.cpu=cpu;
    this.ligado=false;
   }
   info():void{
    //um relatório que imprime no console todos os dados atuais do computador
    console.log(`nome:${this.name}`)
    console.log(`Ram:${this.ram}`)
    console.log(`cpu:${this.cpu}`)
    console.log(`Ligado:${this.ligado? "Sim" :" Não"}`);
    console.log("----------------------------------");
   }
   ligar():void{
    //Método de Ação
    this.ligado=true;
   }
   desligar():void{
    //Método de Ação 
    this.ligado=false;
   }
}
//Instanciação: cria 3 comp usamdo o mesmo molde
const comp1 =new Computador("Rapido", 10 , 20);
const comp2  = new Computador("carão" , 20 ,38);
const comp3 = new Computador("Gamer" , 120 ,29);

//Execução
comp1.ligar();
comp1.info();
comp2.info();
comp3.info();

