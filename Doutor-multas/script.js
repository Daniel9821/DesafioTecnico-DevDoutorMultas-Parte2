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

function caminhoes(){
	let data = fazGet("https://parallelum.com.br/fipe/api/v1/caminhoes/marcas");
	let carros = JSON.parse(data);
	let caminhao = document.getElementById("caminhao");
	carros.forEach(element => {
		let linha = criarLinha(element);
		caminhao.appendChild(linha);
	});
}

caminhoes();

function motos(){
	let data = fazGet("https://parallelum.com.br/fipe/api/v1/motos/marcas");
	let carros = JSON.parse(data);
	let moto = document.getElementById("moto");
	carros.forEach(element => {
		let linha = criarLinha(element);
		moto.appendChild(linha);
	});
}

motos();

// vai criar uma classe com o nome active no accordion que foi clicado
for (i = 0; i < accordion.length; i++){
	accordion[i].addEventListener('click', function(){
		this.classList.toggle('active')
	})
}


