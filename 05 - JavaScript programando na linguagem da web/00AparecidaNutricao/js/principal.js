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





