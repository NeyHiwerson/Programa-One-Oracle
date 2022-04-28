let aluno = {
    name : "Robert",
    isHuman : true,
}
console.log(aluno.isHuman ? "alo" : "nada aqui")

let name = new String("Mayk")
name.surName = "Brito"
let age = new Number(5678)
console.log(name, age)

let dataComunhao = new Date("2022-01-15")
console.log(dataComunhao)
console.log(dataComunhao.__proto__)

console.log(name)
delete name.surName
console.log(name)
let n1 = 3
let n2 = (n1 ** 3)
console.log(n2)