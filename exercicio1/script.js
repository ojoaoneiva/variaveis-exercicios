let nome
let idade
console.log(typeof(nome))
console.log(typeof(idade))

//O resultado "objeto" aparece no console do DevTools já que o valor nulo foi inserido como valor da variavel. Portanto a única informação que a variavel carrega é de que é um objeto

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof(nome))
console.log(typeof(idade))
// As duas são strings porque todo dados inserido no prompt é string

console.log("Olá, ", nome+ " você tem "+ idade + " anos")

const p1 = "Você está com uma camisa branca? "
const p2 = "Você gosta de game of thrones? "
const p3 = "Você está com sono ? "
const r1 = prompt(p1)
const r2 = prompt(p2)
const r3 = prompt(p3)
console.log(p1, r1)
console.log(p2, r2)
console.log(p3, r3)