let precoCombustivelComum = 5.59;
let precoCombustivelEtanol = 2.69;
let carroEtanol = 2.69;
/*let carroComum = 'CombustivelComum'*/
let consumoMedio = 6;
let distanciaViagem = 200;

const valorViagemCombustivelComum = (distanciaViagem / consumoMedio) * precoCombustivelComum;
const valorViagemCombustivelEtanol = (distanciaViagem / consumoMedio) * precoCombustivelEtanol;

if (carroEtanol == precoCombustivelEtanol) {
    console.log('Consumo com Etanol' + valorViagemCombustivelEtanol);
} 
