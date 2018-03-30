//Seleciona o campo de filtro
var campoFiltro = document.querySelector("#filtrar-tabela");

//Adiciona o evento de input que ao digitar no input ele executa uma função
campoFiltro.addEventListener("input",function(){
	console.log(this.value);
	var pacientes = document.querySelectorAll(".paciente");


	if (this.value.length > 0) { // Compara se o campo de texto é maior que zero
		for(var i = 0; i < pacientes.length ; i ++){
			var paciente = pacientes[i];
			var tdNome = paciente.querySelector(".info-nome");
			var nome = tdNome.textContent;

			//Expressão Regular que pesquisa os nomes
			var expressao = new RegExp(this.value,"i");

			if (!expressao.test(nome)) { //Testa se expressão regular 
				paciente.classList.add("invisivel");
			}
			else{
				paciente.classList.remove("invisivel");
			}
		}
	}
	else{ // Se não tiver nada digitada no campo de filtro ele remove a classe invisivel
		 for( var i = 0; i < pacientes.length; i++){
		 	var paciente = pacientes[i];
		 	paciente.classList.remove("invisivel");
		 }
	}

	
});