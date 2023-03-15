//type number - variáveis númericas
const meuNumero = 3;
const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log (operacaoMatematica);

//ponto flutuante - números com decimal
const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

//NaN -> Not A Number - não é um número
const alura = "Alura";

console.log (alura * primeiroNumero);

// strings - variáveis de texto ou "tudo que não seja número"
const texto1 = "Olá mundo! ";
    //em teoria funciona a mesma coisa com aspas simples e duplas 
const texto2 = 'Olá mundo!';
const senha = "senhaSuperSegura456!";
const stringDeNumeros = "99240096";

const citacao = "Meu nome é ";
const nome = "Larissa";
const pontuacao =  ".";

//concatenação - adicionando texto
console.log(texto1+citacao+nome+pontuacao);

//tipo boolean - Comparações
const numero1 = 5;
const numero2 = 5;

const texto = "Batata";
const textoo = "Sorvete";

let cadastroAtivado = false;

console.log(numero1 === numero2);
console.log(numero1 ==  numero2);

console.log(texto === textoo);

