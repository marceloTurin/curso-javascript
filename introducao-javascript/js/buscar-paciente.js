var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(){

	var xhr = new XMLHttpRequest(); //Cria o objeto de requisição javascript

	xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes"); //Abre a requisição 

	//Carrega a requisição
	xhr.addEventListener("load", function(){
		//Exibe a resposta da requisição
		console.log(xhr.responseText);
	})
	xhr.send(); //Envia a requisição
});