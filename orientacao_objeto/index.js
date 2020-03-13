// inicio da definição classe -------------------------------------------
var Cumprimento = /** @class */ (function () {
    function Cumprimento(_nome, _idade) {
        if (_nome === void 0) { _nome = ""; }
        if (_idade === void 0) { _idade = 0; }
        this.nome = _nome;
        this.idade = _idade;
    }
    //outro método
    Cumprimento.prototype.mostrarNomeIdade = function (idade, nome) {
        return "A pessoa " + nome + " tem " + idade + " anos";
    };
    return Cumprimento;
}());
// fim da definição classe -------------------------------------------
/* invocando a função e o resultado
vou armazenar na variavel de memória chamada resposta */
var pessoa1 = new Cumprimento();
console.log(pessoa1.mostrarNomeIdade(56, "Pedro"));
