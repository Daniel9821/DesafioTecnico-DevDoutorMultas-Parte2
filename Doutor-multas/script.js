const accordion = document.getElementsByClassName('container');

function fazGet(url){
	let request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.send();
	return request.responseText;
}

function criarLinha(carros){
	console.log(carros);
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

/*var header = document.querySelector('.content');
var section = document.querySelector('section');

var requestURL = 'https://daniel9821.github.io/veiculosApi/';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var veiculos = request.response;
  populateHeader(veiculos);
  showHeroes(veiculos);
}

function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['veiculosNome'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}

*/


// vai criar uma classe com o nome active no accordion que foi clicado
for (i = 0; i < accordion.length; i++){
	accordion[i].addEventListener('click', function(){
		this.classList.toggle('active')
	})
}


