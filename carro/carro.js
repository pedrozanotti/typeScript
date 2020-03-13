var Carro = /** @class */ (function () {
    function Carro(_marca, _velAtual, _velMaxima) {
        if (_marca === void 0) { _marca = ""; }
        if (_velAtual === void 0) { _velAtual = 0; }
        if (_velMaxima === void 0) { _velMaxima = 0; }
        this.marca = _marca;
        this.velMaxima = _velMaxima;
        this.velAtual = _velMaxima;
    }
    Carro.prototype.acelerar = function (marca, velAtual, velMaxima) {
        if (this.velAtual < this.velMaxima) {
            for (var i = this.velAtual; i < this.velAtual; i++) {
                this.velAtual++;
                return ("A velocidade atual \u00E9 " + this.velAtual + " km/h \n\n            Max " + this.velAtual + " km/h");
            }
        }
    };
    Carro.prototype.desacelerar = function (marca, velAtual, velMaxima) {
        if (this.velAtual <= this.velMaxima) {
            for (var i = 0 < this.velAtual; i < this.velMaxima; i++) {
                this.velAtual--;
                return "O carro est\u00E1 desacelerando " + velAtual + " km/h";
            }
        }
        if (this.velAtual == 0) {
            return "O carro parou!";
        }
    };
    return Carro;
}());
var carro1 = new Carro();
console.log(carro1.acelerar("BMW", 20, 20));
