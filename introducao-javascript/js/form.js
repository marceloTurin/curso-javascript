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

	//Chama a função que obtem os dados do paciente e coloca em um objeto
	var paciente = obtemPacienteDoFormulario(form);
	console.log(paciente);


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
	imcTd.textContent = calculaImc(peso,altura);

	//Insere os filhos td e coloca na tr
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);


	// Insere o filho tr e coloca na tabela
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

});


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