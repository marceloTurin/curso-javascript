//Seleciona todos os pacientes da tabela
var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);

//Função que remove o paciente quando fizer o double click
/*pacientes.forEach(function(paciente){
	paciente.addEventListener("dblclick",function(){
		console.log("Fui clicado");
		//Função remove
		this.remove();

	});
})*/


var tabela = document.querySelector("table");

//Função
tabela.addEventListener("dblclick",function(event){

	var alvoEvento = event.target; // pega o alvo que foi clicado
	var paiDoAlvo = alvoEvento.parentNode; // tranfere o alvo pro pai dele
	paiDoAlvo.remove(); // remove o pai do evento

	//event.target.parentNode.remove(); mesmo exemplo usando uma linha de codigo 

});