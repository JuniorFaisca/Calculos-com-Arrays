/*

const items = [10, 45, -2, 8, 19, -45, 62, -29, -1, 99, 5, 70, 26, -42, 189];

CALCULE A SOMATORIA
CALCULE A MEDIA
MOSTRE O MENOR NUMERO
MOSTRE O MAIOR NUMERO
MOSTRE QUANTOS NUMEROS SÃO PARES
MOSTRE QUANTOS NUMEROS SÃO IMPARES
MOSTRE QUANTOS NUMEROS SÃO PRIMOS
MOSTRE QUANTOS NUMEROS SÃO DIVISÍVEIS INTEIROS POR 2
MOSTRE O ARRAY INVERTIDO EX: [1,2,3] -> [3,2,1]

*/


const itens = [
    10,
    45,
    -2,
    8,
    19,
    -45,
    62,
    -29,
    -1,
    99,
    5,
    70,
    26,
    -42,
    189
];

const numerosPares = itens.filter(num => num % 2 === 0);
const numerosImpares = itens.filter(num => num % 3 === 0);

let menorNumero = null;
let maiorNumero = null;
let somaTotal = 0;

function numerosPrimos (num) {
    for (let i = 2; num > i; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

for(let i = 0; i < itens.length; i++) {

    if (menorNumero == null) {
        menorNumero = itens[i];

    } else {
        if (itens[i] < null) {
            menorNumero = itens[i];
        }
    }

    if (maiorNumero == null) {
        maiorNumero = itens[i];

    } else {
        if (itens[i] > null) {
            maiorNumero = itens[i];
        }
    }
    somaTotal += itens[i];
};


console.log( '1-', { maiorNumero } );
console.log( '2-', { menorNumero } );
console.log( '3-', { somaTotal } );
console.log( '4-', { media: somaTotal / itens.length } );
console.log( '5-', 'Numeros Primos =', itens.filter(numerosPrimos) );
console.log( '6-', { numerosPares } );
console.log( '7-', { numerosImpares } );
//console.log( '8-', 'Os divisiveis por 2 são:' );
console.log( '9-', itens.reverse() );