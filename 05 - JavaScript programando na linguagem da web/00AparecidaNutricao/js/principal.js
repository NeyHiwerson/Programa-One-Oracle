var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

/*
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)
var paciente = pacientes[0]
console.log(paciente)
var nomePaciente = paciente.querySelector(".info-nome")
console.log(nomePaciente.textContent)
*/


var pacientes = document.querySelectorAll(".paciente");

for (let index = 0; index < pacientes.length; index++) {
    var paciente = pacientes[index];
    console.log(paciente)
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido")
    }
    
    if(altura <= 0 || altura >= 3){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido")

    }
    
    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(1);
    } /* else{
        tdImc.textContent = "Altura e/ou peso inválidos!";    
    } */
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Fui clicado!!");
    var form = document.querySelector("#form-adiciona");
    console.log(form);

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    console.log(nome);
    console.log(peso);
    console.log(altura);
    console.log(gordura);

    var pacienteTr = document.createElement("tr");
    console.log(pacienteTr);

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    console.log(nomeTd.textContent);
    console.log(pesoTd.textContent);
    console.log(alturaTd.textContent);
    console.log(gorduraTd.textContent);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    console.log(pacienteTr);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr)


})




