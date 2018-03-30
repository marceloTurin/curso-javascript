//Seleciona o campo de filtro
var campoFiltro = document.querySelector("#filtrar-tabela");

//Adiciona o evento de input que ao digitar no input ele executa uma função
campoFiltro.addEventListener("input",function(){
	console.log(this.value);
	var pacientes = document.querySelectorAll(".paciente");

	for(var i = 0; i < pacientes.lenght ; i ++){
		var paciente = pacientes[i];
		var tdNome = paciente.querySelector(".info-nome");
		var nome = paciente.textContent;
	}
});