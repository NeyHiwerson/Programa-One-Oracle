console.log({})

let number1 = 2 + Number("2") 
console.log(number1)

let number2 = 2 + "2"
console.log(number2)

// Transformar String em Number e Number em String

let S1 = "123"
console.log(typeof S1)
console.log(Number(S1) + 100)

let N1 = 321
console.log(typeof N1)
console.log(String(N1) + (10 + 15))

// Contando caracteres e numeros
console.log("Quantas letras tem a palavra 'paralelepipedo'?")
let word = "paralelepipedo"
console.log(word.length)

console.log("Quantos digitos tem o numero que esta guardado na variavel N2?")
let N2 = 54879
console.log(String(N2).length)

// casas decimais e ponto por virgula
console.log("tenho um numero decimal muito extenso")
let N3 = 5734.5638892
console.log(N3)
console.log("Vou simplificar a 3 casas decimais e depois verificar o tipo de dado")
let N4 = N3.toFixed(3)
console.log(N4)
console.log(typeof N4)
console.log("vou simplificar a duas casas decimais e trocar o ponto por virgula")
console.log(N3.toFixed(2).replace(".",","))

// MAIUSCULAS e minusculas
let S2 = "Programar é muito bom Eu Amo"
console.log(S2)
console.log(S2.toUpperCase())
console.log(S2.toLowerCase())

// Manipulando Strings e Arrays
let piroca = "Eu quero viver o amor ao lado da Priscila!"
console.log(piroca.includes("viver"))
console.log(piroca)
let myArray = piroca.split(" ")
console.log(myArray)
console.log(myArray.includes("amor"))
let pirocaWithUnderscore = myArray.join("_")
console.log(pirocaWithUnderscore)

// Criando Array com construtor
let myArray1 = new Array("a", "b", "c", "A", "B", "C")
console.log("tenho um Dado, que tipo é?")
console.log(typeof myArray1)
console.log("ok, deixa eu ver ele")
console.log(myArray1)
console.log("sim é uma array de Strings")

let myArray2 = new Array(8)
console.log("opa tem um novo dado aqui, que tipo é?")
console.log(typeof myArray2)
console.log("ok, deixa eu ver ele")
console.log(myArray2)
console.log("sim é uma array de 8 posiçoes e esta vazia")

console.log("tenho 2 Arrays uma de " + myArray1.length + " posiçoes com letras e outra de " + myArray2.length + " posiçoes vazia")

// transformas uma String em Array 
let S10 = "manipuláção"
let myArray3 = Array.from(S10)
console.log(myArray3)

// Manipulando Arrays -------------------------------

let techs = ["html", "css", "JS"]

// Adicionar um item no fim

techs.push("Nodejs")

// Adicionar um item no começo

techs.unshift("SQL")

// Remover um item no fim

//techs.pop()

// Remover um item no começo

//techs.shift()

// pegar somente alguns elementos do Array
//techs.slice(1, 4 )
console.log(techs.slice(1, 4 ))
// o primeiro argumento é o index da Array(0-x)
// o segundo argumento é até qual posição do elemento eu quero(1-x)

// remover 1 ou mais itens em qualque posição do Array
//techs.splice(2,2)
techs.splice(2, 1)
// o primeiro argumento é o index da Array que vc vai tirar
// o segundo argumento é quantos itens a partir do primeiro argumento vc quer excluir

// encontrar uma posição no Array
let qualIndex = techs.indexOf("Nodejs")
console.log(qualIndex)
//techs.splice(qualIndex,1)

console.log(techs)