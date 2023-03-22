function aprensentar (nome){
    retorn `meu nome é ${nome}`;
}

const aprensentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 ||  num2 > 10) {
        return "somente números de 1 a 9"
    }
    else {
        num1 + num2;
    }
}

console.log(aprensentarArrow("Larissa"));
console.log(soma(2, 2));
console.log(somaNumerosPequenos(6, 4));
