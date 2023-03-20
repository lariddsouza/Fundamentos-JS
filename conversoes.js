// tipo de dado
// como trabalhar isso com os booleanos

// conversão implícia
const numero = 5;
const numeroString = Number("5");

// comparação de tipos de variaveis
console.log(numero === numeroString);
// comparação de "conteúdo" de dentro das variáveis, que seria a comparação implícita
console.log(numero == numeroString);
// concatenação
console.log(numero + numeroString);

// conversão explícita
// de string para número - Number()
// de número para string - String()
console.log(numero + numeroString);

// == comparação implicita
const numero1 = 5;
const texto1 = "5";

console.log(numero1 == texto1);

// === comparação explicita;
console.log(numero1 === texto1);

//typeof
console.log(typeof numero1);
console.log(typeof texto1);

// == compara só o valor
// === compara o valor e o tipo de dado
