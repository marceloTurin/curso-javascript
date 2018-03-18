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

//Calcula o IMC
var imc = peso / (altura * altura);

// Coloca o conteudo de texto da var imc na tdImc
tdImc.textContent = imc;

