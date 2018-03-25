//querySelector seleciona um elemento html,class,id
var titulo = document.querySelector(".titulo");



titulo.textContent = "Aparecida Nutricionista";

//Seleciona todas tr dos pacientes
var pacientes  = document.querySelectorAll(".paciente");

//Retorna o tamanho do array
console.log(pacientes.length);

//Criação do for para percorrer um paciente de cada vez
for ( var i = 0; i < pacientes.length ; i++){
	
	var paciente = pacientes[i];

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
	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	//Verifica Peso é inválido
	if (!pesoEhValido) {
		console.log("Peso invalido");
		pesoEhValido = false;
		tdImc.textContent = "Peso Invalido";
		//Adiciona uma classe css
		paciente.classList.add("paciente-invalido");
	}

	//Verifica Altura
	if (!alturaEhValida) {
		console.log("Altura invalida");
		alturaEhValida = false;
		tdImc.textContent = "Altura invalida";
		//Adiciona um estilo css
		paciente.style.backgroundColor = "lightcoral";

	}

	//Verifica se as variaveis de verificação são true para fazer o calculo de IMC
	if (alturaEhValida && pesoEhValido) {
		//Chama a função de calculaImc o IMC
		var imc = calculaImc(peso,altura);

		// Coloca o conteudo de texto da var imc na tdImc
		tdImc.textContent = imc;

		//toFixed() limita o numero de casas decimais
	}
}


//Valida Peso
function validaPeso(peso){
	if(peso >= 0 && peso < 1000){
		return true;
	}
	else{
		return false;
	}
}

//Valida Altura
function validaAltura(altura){
	if (altura >= 0 && altura <= 3) {
		return true;
	}

	else{
		return false;
	}
}

//Função que calcula o IMC
function calculaImc(peso,altura){
	var imc = 0;
	imc = peso / (altura *altura);
	return imc.toFixed(2);
}


