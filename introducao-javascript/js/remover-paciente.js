//Seleciona todos os pacientes da tabela
var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);

//Função que remove o paciente quando fizer o double click
pacientes.forEach(function(paciente){
	paciente.addEventListener("dblclick",function(){
		console.log("Fui clicado");
		//Função remove
		this.remove();

	});
})