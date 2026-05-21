/*
Aprende o que é GENERICS em Typescript 
*/

function f_Teste< T ,U >(v:T, r:U):U{

    return r
}

console.log(f_Teste<number,string>(10,"b"));
console.log(f_Teste<string,number>("b", 20));

class C_test<T>{
    public valor:T;
    constructor(valor:T){
        this.valor=valor;
    }
}

const ct1 = new C_test<string>("Olar");
const ct2 = new C_test<number>(98986078012);

console.log("--------------------------------------")
console.log(ct1.valor);
console.log(ct2.valor);