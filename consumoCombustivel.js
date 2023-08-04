/*Criando a calsse carro */
class carro{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }
/* Criando o método para calcular o gasto */
    consumoVeiculo(quantidadeDekm, precoCombustive) {
    return quantidadeDekm * this.gastoMedio * precoCombustive  
}
}

/* Criando a instância */
const touro = new carro('Fiat', 'vinho', 1 / 13);
console.log("Gasto: R$ "+ touro.consumoVeiculo(800, 5.76));
