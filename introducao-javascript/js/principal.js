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
	var pesoEhValido = true;
	var alturaEhValida = true;

	//Verifica Peso
	if (peso <= 0 || peso >= 1000) {
		console.log("Peso invalido");
		pesoEhValido = false;
		tdImc.textContent = "Peso Invalido";
		//Adiciona uma classe css
		paciente.classList.add("paciente-invalido");
	}

	//Verifica Altura
	if (altura <= 0 || altura >= 3.00) {
		console.log("Altura invalida");
		alturaEhValida = false;
		tdImc.textContent = "Altura invalida";
		//Adiciona um estilo css
		paciente.style.backgroundColor = "lightcoral";

	}

	//Verifica se as variaveis de verificação são true para fazer o calculo de IMC
	if (alturaEhValida && pesoEhValido) {
		//Calcula o IMC
		var imc = peso / (altura * altura);

		// Coloca o conteudo de texto da var imc na tdImc
		tdImc.textContent = imc.toFixed(2);

		//toFixed() limita o numero de casas decimais
	}
}

//escuta o vento click quando o usuário clicar no titulo

//primeiro versão  usando uma função anônima
titulo.addEventListener("click",function(){
	console.log("Olha so posso chamar uma função anonima");
});

//segunda versão com uma função nomeada
titulo.addEventListener("click",mostraMensagem);

function mostraMensagem(){
	console.log("Ola eu fui clicado!");
}


var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
	//Não permite que o vento faça seu comportamento padrão, e reagira conforme o que pedimos no evento
	event.preventDefault();
	
	var form = document.querySelector("#form-adiciona");

	//Pega os valores do formulario da tag name do formulário
	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	//Cria os elemto tr e td 
	var pacienteTr = document.createElement("tr");

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	//Pega os elementos criados e coloca o conteudo de texto dos valores do formulario
	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	//Insere os filhos td e coloca na tr
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);

	// Insere o filho tr e coloca na tabela
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

});
