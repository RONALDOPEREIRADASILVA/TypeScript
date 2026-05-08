/*
**Modificadores de Acesso
No TypeScript, esses modificadores controlam a *visibilidade* das propriedades e métodos. Aqui está uma explicação prática e rápida:
### 🟢 public (Oportunista)
É o padrão. Se você não escrever nada, ela é pública.
 * *O que significa:* Pode ser lida ou alterada de *qualquer lugar*. Fora da classe, dentro dela ou em classes filhas.
 * *Exemplo de comentário:* // Acessível de qualquer lugar (dentro ou fora da classe).
### 🔴 private (Exclusivo)
É o nível mais restrito de segurança.
 * *O que significa:* Só pode ser acessado ou modificado *dentro da própria classe* onde foi criado. Se você criar uma classe "Notebook" que herda de "Computador", ela não conseguirá mexer no que for private.
 * *Exemplo de comentário:* // Só a própria classe Computador pode ler ou alterar.
 * 
 ### 🟡 protected (Família)
É o meio-termo, muito usado em herança.
 * *O que significa:* Só pode ser acessado *dentro da própria classe* e pelas *classes filhas* (que herdam dela). Quem está "de fora" (no código principal) não consegue ver.
 * *Exemplo de comentário:* // Acessível apenas nesta classe e nas classes que herdarem dela.

*/
class Computador{
    //define as características
   private id: number ;   // Só o Computador mexe no ID (segurança total)
   public name:string;// Qualquer um pode mudar o nome da máquina
   private ram: number;// Controle interno de hardware
   private cpu: number;// Controle interno de hardware
   protected ligado:boolean; // O "filho" (ex: GamerPC) pode saber se está ligado

   constructor(nome:string,ram:number,cpu:number){
    //o construtor é o que "nasse" o objeto.
    //inicializa o objeto com os valores que você passa
    this.name=nome;
    this.ram=ram;
    this.cpu=cpu;
    this.ligado=false;
    this.id=0;
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
   mudarRam(qtde:number):void{
    if(qtde >0 && qtde <= 1000){
        this.ram=qtde;
    }else{
        console.log(`Quantidade ${qtde} para o computador ${this.name} não é permitida`)
    }
   }
}
//Instanciação: cria 3 comp usamdo o mesmo molde
const comp1 =new Computador("Rapido", 10 , 20);
const comp2  = new Computador("carão" , 20 ,38);
const comp3 = new Computador("Gamer" , 120 ,29);

//Execução

comp1.mudarRam(-100);
comp1.ligar();
comp1.info();
comp2.info();
comp3.info();

