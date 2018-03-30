var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(){

	var xhr = new XMLHttpRequest(); //Cria o objeto de requisição javascript

	xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes"); //Abre a requisição 

	//Carrega a requisição
	xhr.addEventListener("load", function(){
	var erroAjax = document.querySelector("#erro-ajax");
		
		if (xhr.status == 200) {

			erroAjax.classList.add("invisivel");

			//Recebe o texto da requisição
			var resposta = xhr.responseText;

			//Pega o texto da requição e passa  ele para um objeto JSON ou seja um array
			var pacientes = JSON.parse(resposta);

			//Adiciona os  pacientes na tabela
			pacientes.forEach(function(paciente){
				adicionaPacienteNaTabela(paciente);
			});
		}
		else{
			//Exibe os status de erro do ajax
			console.log(xhr.status);
			console.log(xhr.responseText);
			
			erroAjax.classList.remove("invisivel")
		}

		
	})
	xhr.send(); //Envia a requisição
});