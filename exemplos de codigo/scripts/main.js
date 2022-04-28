// para imprimir strings no console usamos console.log("")
// temos variaçoes com "" com '' e com `` sendo a ultima 
// multilinhas e aceita expressoes logicas dentro de ${...}
console.log('Ney "das" Arabias')

// com o alert("") exibimos uma mensagem numa janela tipo caixa de mensagem
//alert("tudo nosso")

console.log(`o "tubarao" joga 'golfe' na praia
de segunda
a
sexta
cerveja R$4,00 reais 3 por R$10,00
por unidade 3 sairia ${4+4+4} pila`)

/*
number
33 -- numeros inteiros
13.3 -- numeros reais, float 
NaN -- Not a Number
Infinity -- infinito (não tem muita aplicação, talves para comparação)
*/
console.log(30)
console.log(10+10)

/* undefined x null
     undefined : indefinido
     null: nulo
           objeto que não possui nada dentro
           diferente de indefinido
*/

// object - propriedades ou atributos - funcionalidades ou métodos
// {propriedade: "valor"} - {funcionalidade: function nomeDaFunction() {bloco de codigo}}
console.log(
    {   nome: "ney",
        idade: "35",
        peso: "100",

        andar: function() {
            console.log("andando")
        }
    }
)

console.log(["Maik", 36, 68])
console.log(["café", "leite", "açucar","pão","manteiga","queijo","bolo de fubá","rosca"])

const animals = [ "Lion", "Monkey", "Duck", "Dog", "Cat"]
console.log(animals)
console.log(animals[2])

// para sabermos a quantidade de posições de uma array usamos .length
console.log(animals.length + " animais")
var almoco = ["arros", "feijão", "macarrão","salada", "carne", "frango"]
let janta = "macarronada"
console.log(janta.length + " letras")
console.log(janta)
janta = "cachorro quente"
console.log(janta)
console.log(typeof almoco)
function agua() {
    let as = 12
    console.log(as)
    let janto = "pizza"
    console.log(janto)

}
agua()
/* esta declaração abaixo da erro pois a variavel foi declarada let e so existe dentro daquele scope

console.log(a)

*/
var carro, color
carro = "fusca"
color = "vermelho"
console.log(typeof carro)
console.log(carro)

let age, isHuman
age = 18
isHuman = false
console.log("o meu carro é um " + carro, color + " e tenho ele a", age,"anos", isHuman )
// ou podemos fazer interpolando valores com template literals or template strings
console.log(`Meu ${carro} é ${color} e tenho ele a ${age} anos.`)

// object
const person = {
    name: "joao",
    age: 25,
    weight: 88.3,
    isAdmin: true,

}
// person é object type array

console.log(person)
console.log(person.name)
console.log(`meu amigo ${person.name} tem ${person.age} anos de idade.`)

// podemos declarar uma array de objetos
const pessoas = [
    {name: "joaquim", age: 22, weigth: 70.5, work: "professor"},
    {name: "manoel", age: 42, weigth: 54.5, work: "carpinteiro"},
    {name: "Enzo", age: 15, weigth: 45, work: "bailarino"},
    {name: "Gabriel", age: 28, weigth: 80.3, work: "Futebolista"},   
]
console.log(pessoas[1].name,"é um excelente",pessoas[1].work +"." )

var weight
console.log(typeof weight)
var student = {
    name: "Joanna",
    age: 13,
    stars: 4.7,
    isSubscribed: true,
    weight: 40,
}
console.log( `A ${student.name} tem ${student.age} anos de idade e pesa ${student.weight} quilos`)

let students = [
    student
]
console.log(students[0])
console.log(students[0].name)

var pedro = {
    name: "Pedro",
    age: 22,
    weigth:80.4,
}
students[1] = pedro;
console.log(students)

// abaixo temos uma declaraçaõ de objeto com seu atributos e métodos.
var pessoa = {
    // primeiro temos seus atributos
    nome: ['Bob', 'Smith'],
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar', 'jogar gamão'],

    // abaixo temos declarações de funcoes (métodos)
    bio: function() {
      alert(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
    },
    saudacao: function() {
      alert('Oi! Eu sou ' + this.nome[0] + '.');
    }
};

// pegamos nosso objeto e inserimos na array students na posição 2
students[2] = pessoa;
// chamamos os metodos inserido na posição 2 da nossa array students

//students[2].bio();

//students[2].saudacao();

console.log(students[2].nome[0], students[2].nome[1]);

console.log('adoro',students[2].interesses[2])

