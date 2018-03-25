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
	//Não permite que o evento faça seu comportamento padrão, e reagira conforme o que pedimos no evento
	event.preventDefault();
	
	var form = document.querySelector("#form-adiciona");

	//Pega os valores do formulario da tag name do formulário
	//Chama a função que obtem os dados do paciente e coloca em um objeto
	var paciente = obtemPacienteDoFormulario(form);

	//Função que criar a tr do paciente
	var pacienteTr = montaTr(paciente);

	var erros = validaPaciente(paciente);

	console.log(erros);
	//Se o array erros retorna maior que 0 
	if (erros.length > 0) {

		//Função que exibe mensagem de erro 
		exibeMensagemDeErro(erros);

		//O return vazio faz que a função seja pulada;
		return;
	}

	// Insere o filho tr e coloca na tabela
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

	//Reseta o formulario limpando os campos
	form.reset();
	var mensagensErros = document.querySelector("#mensagens-erro");
	mensagensErros.innerHTML = "";

});


//escuta o evento click quando o usuário clicar no titulo

//primeiro versão  usando uma função anônima
titulo.addEventListener("click",function(){
	console.log("Olha so posso chamar uma função anonima");
});

//segunda versão com uma função nomeada
titulo.addEventListener("click",mostraMensagem);

function mostraMensagem(){
	console.log("Ola eu fui clicado!");
}



//Função que pega a variavel form e cria em um objeto javascript do paciente
function obtemPacienteDoFormulario(form){

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc :calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

//Função que pega o objeto paciente e monta as Tr da tabela
function montaTr(paciente){

	//Cria os elemto tr 
	var pacienteTr = document.createElement("tr");
	//Adiciona uma classe a tr
	pacienteTr.classList.add("paciente");

	//Variavies que cria a td chamando a função montaTd
	var nomeTd = montaTd(paciente.nome, "info-nome");
	var pesoTd = montaTd(paciente.peso, "info-peso");
	var alturaTd = montaTd(paciente.altura, "info-altura");
	var gorduraTd = montaTd(paciente.gordura, "info-gordura");
	var imcTd = montaTd(paciente.imc, "info-imc");


	//Insere os filhos td e coloca na tr
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	return pacienteTr;

}


//Função que monta a Td com o dado que veio do formulário e com o nome da classe
function montaTd(dado,classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

//
function validaPaciente(paciente){

	//Array com as mensagens de erro
	var erros =[];

	if (paciente.nome.length ==0) {
		erros.push("O nome não pode ser em branco");
	}

	//Verifica se o peso é invalido
	if (!validaPeso(paciente.peso)){
		erros.push("Peso é inválido");
	} 

	//Verifica se a altura é invalida
	if (!validaAltura(paciente.altura)) {
		erros.push("Altura é inválida");
	}

	if (paciente.gordura.length == 0) {
		erros.push("A gordura não pode ser em branco");
	}

	if (paciente.peso.length == 0) {
		erros.push("A gordura não pode ser em branco");
	}
	if (paciente.altura.length == 0) {
		erros.push("A altura não pode ser em branco");
	}
	
	//Retorna as mensagens de erros, caso não tenha erro retorna vazio
	return erros;

}

//Função que exibe mensagem de erro passando como parametro o array de erros
function exibeMensagemDeErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	//Limpa as mensagens de erro
	ul.innerHTML = "";
	//forEach
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		br = document.createElement("br");
		ul.appendChild(li);
		ul.appendChild(br);
		
	});



}