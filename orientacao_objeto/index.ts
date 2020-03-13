// inicio da definição classe -------------------------------------------
class Cumprimento {

    //atributos    nome do artibuto:tipo
    nome:string;
    idade:number

    constructor (_nome:string = "", _idade:number = 0)
    {
        this.nome=_nome;
        this.idade=_idade;
    }

    //outro método
    mostrarNomeIdade (idade: number, nome: string)
    {
        return `A pessoa ${nome} tem ${idade} anos`
    }
}
// fim da definição classe -------------------------------------------

/* invocando a função e o resultado 
vou armazenar na variavel de memória chamada resposta */
let pessoa1 = new Cumprimento()
console.log(pessoa1.mostrarNomeIdade(56,"Pedro"))
