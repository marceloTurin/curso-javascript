//querySelector seleciona um elemento html,class,id
var titulo = document.querySelector(".titulo");



titulo.textContent = "Aparecida Nutricionista";

//Seleciona a tr do paciente
var paciente  = document.querySelector("#primeiro-paciente");

//Seleciona a td peso do paciente
var tdPeso = paciente.querySelector(".info-peso");

//Seleciona o conteudo de texto da td peso
var peso = tdPeso.textContent;

//Seleciona a td altura do paciente
var tdAltura = paciente.querySelector(".info-altura");

//Seleciona o conteudo de texto da td altura
var altura = tdAltura.textContent;

//Seleciona a td imc do paciente
var tdImc = paciente.querySelector(".info-imc");

//Variaveis de verificação
var pesoEhValido = true;
var alturaEhValida = true;

//Verifica Peso
if (peso <= 0 || peso >= 1000) {
	console.log("Peso invalido");
	pesoEhValido = false;
	tdImc.textContent = "Peso Invalido"
}

//Verifica Altura
if (altura <= 0 || altura >= 3.00) {
	console.log("Altura invalida");
	alturaEhValida = false;
	tdImc.textContent = "Altura invalida";
}

//Verifica se as variaveis de verificação são true para fazer o calculo de IMC
if (alturaEhValida && pesoEhValido) {
	//Calcula o IMC
	var imc = peso / (altura * altura);

	// Coloca o conteudo de texto da var imc na tdImc
	tdImc.textContent = imc;
}


