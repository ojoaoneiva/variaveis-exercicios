// let nome
// let idade
//console.log(typeof nome)
//console.log(typeof idade)

//O resultado undefined aparece no console do DevTools já que nenhum valor foi atribuido à variavel.

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

//console.log(typeof(nome))
//console.log(typeof(idade))
// As duas são strings porque todo dados inserido no prompt é string

console.log("Olá, ", nome+ " você tem "+ idade + " anos")

const pergunta1 = "Você está com uma camisa branca?"
const pergunta2 = "Você gosta de game of thrones? "
const pergunta3 = "Você está ansioso?"
const answer1 = prompt(pergunta1)
const answer2 = prompt(pergunta2)
const answer3 = prompt(pergunta3)

console.log(pergunta1, answer1)
console.log(pergunta2, answer2)
console.log(pergunta3, answer3)