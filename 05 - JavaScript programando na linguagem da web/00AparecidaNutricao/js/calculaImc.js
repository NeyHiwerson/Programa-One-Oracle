var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let index = 0; index < pacientes.length; index++) {
    var paciente = pacientes[index];    
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    if (peso <= 0 || peso >= 600) {
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido")
    }
    
    if(altura <= 0 || altura >= 2.75){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido")
    }
    
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(1);
}






