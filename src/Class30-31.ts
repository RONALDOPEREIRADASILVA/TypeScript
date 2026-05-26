 /**
  * Trabalhando com Módulos em *Typescript
  *  Vamos aprender a programar em *arquivos diferentes, a fim que *deixar nosso programa mais *organizado.

*Em TypeScript, generics são uma *característica que permite criar *componentes (funções, classes, *interfaces) que podem operar em *vários tipos de dados, sem perder a *informação sobre esses tipos. Isso *proporciona flexibilidade e *reutilização de código, uma vez que *você pode escrever código que é *independente do tipo específico, mas *ainda mantém a segurança de tipo.
 */
 const Coisas=["Corda", "Papel" , "lapis", "Caneta"];
 class Pessoa{
    nome:string;
    altura:number;

    constructor(nome:string,altura:number){
        this.nome=nome;
        this.altura=altura

    }
}
 class Objeto{
    nome:string;
    constructor(nome:string){
        this.nome=nome;
    }
}

export {Coisas, Pessoa ,Objeto};