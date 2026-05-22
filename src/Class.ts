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