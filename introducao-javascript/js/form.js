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
