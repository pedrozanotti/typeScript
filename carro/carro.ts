class Carro {
    marca: string
    velMaxima: number
    velAtual: number

    constructor(_marca: string = "", _velAtual: number = 0, _velMaxima: number = 0) {
        this.marca = _marca
        this.velMaxima = _velMaxima
        this.velAtual = _velMaxima
    }

    acelerar(marca: string, velAtual: number, velMaxima: number) {
        if (this.velAtual < this.velMaxima) {
            for (let i = this.velAtual; i < this.velAtual; i++) {
                this.velAtual++
                return (`A velocidade atual é ${this.velAtual} km/h \n
            Max ${this.velAtual} km/h`)
            }
        }
    }

    desacelerar(marca: string, velAtual: number, velMaxima: number) {
        if (this.velAtual <= this.velMaxima) {
            for (let i = 0 < this.velAtual; i < this.velMaxima; i++){
                this.velAtual--
                return `O carro está desacelerando ${velAtual} km/h`
            }

        }

        if (this.velAtual == 0) {
            return "O carro parou!"
        }
    }

}

let carro1 = new Carro ()
console.log(carro1.acelerar("BMW",20,20))

