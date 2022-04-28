console.log("aula sobre Functions")

function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistencia')
    console.log('Revisão é mãe do aprendizado')
    console.log('Quando a empolgação falha o comprometimento Vence')
//    console.log('Agora vai la em cima e fecha o Alert')
//    alert("Vc é uma pessoa abençoada por Deus")
}
createPhrases()

// function with parameters
const sum = function( number1, number2){
    console.log(number1 + number2)
    // nesse caso number1 e number2 são parametros(parameters) de uma função
}
console.log("vou chamar a function with parameters")
sum(4, 7)
// aqui chamamos a funçao com a passagem de argumentos(arguments)

// abaixo temos uma function with parameters and return
const som = function(number1, number2){
    let total = (number1 + number2)
    return total
}
let number1 = 30
let number2 = 24
 
console.log(`O numero 1 é ${number1}.`)
console.log(`O numero 2 é ${number2}.`)
console.log(`E a soma é ${som(number1, number2)}.`)

//function scope
// as funcoes respeitam os escopo porem tem a situação do hoisting que tbm se aplica as funcoes

//hoisting in functions
// no caso abaixo estou chamando a função antes de criar ela
sayMyName()

function sayMyName() {
    console.log("isaac newton")
}

//exemplo de function de expressão qua não aceita hoisting
/*  var sayMyName = function sayMyName() {
    console.log("isaac newton arrombadinho")
}
*/

/*
arrow functions =>
    function do tipo expression com a seguinte sintaxe: */
        const nomeDaFunção = () => {
            console.log("Ney e seus teclados")
        }
nomeDaFunção();

// exemplo de callback function
function myName(name) {
    console.log("antes de executar a função do argumento")
    name()
    console.log("depois de executar a callback function")
}

myName(
    () => {
        console.log("estou em uma callback, eu sou a função do argumento")
    }
)

// funções construtoras
function Person(nome, age, height, work) {
        this.name = nome
        this.age = age
        this.height = height
        this.work = work
        this.walk = function(){
            return this.name + " esta andando"
        }
        this.runner = function(){ 
            console.log( "a " + this.name + " esta correndo")
        }
}  


const laura = new Person("Laura", 25, 1.75, "professora")

console.log(laura)
console.log("A " + laura.name + " é " + laura.work + ".")

console.log(laura.walk())
console.log(laura.runner())

// sobre usar letra maiuscula para nomes de funçoes construtoras
// boas praticas agregadas de outras funçoes contrutoras tipo a String e abaixo temos um exemplo.
let chulapa = new String("Chulapudo")
console.log(chulapa)
