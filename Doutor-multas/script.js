const accordion = document.getElementsByClassName('container');


// vai criar uma classe com o nome active no accordion que foi clicado
for (i = 0; i < accordion.length; i++){
	accordion[i].addEventListener('click', function(){
		this.classList.toggle('active')
	})
}