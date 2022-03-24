const accordion = document.getElementsByClassName('container');

function fazGet(url){
	let request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.send();
	return request.responseText;
}

function criarLinha(carros){
	linha = document.createElement("tr");
	nome = document.createElement("td")
	nome.innerHTML = carros.nome

	linha.appendChild(nome);

	return linha;

}

function main(){
	let data = fazGet("https://parallelum.com.br/fipe/api/v1/carros/marcas");
	let carros = JSON.parse(data);
	let content = document.getElementById("content");
	carros.forEach(element => {
		let linha = criarLinha(element);
		content.appendChild(linha);
	});
}

main();


// vai criar uma classe com o nome active no accordion que foi clicado
for (i = 0; i < accordion.length; i++){
	accordion[i].addEventListener('click', function(){
		this.classList.toggle('active')
	})
}


