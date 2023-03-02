function btnAbreMenu(){
    // console.log('menu vai abrir') foi para teste;
    menu = document.getElementsByClassName("menu");
    menu[0].style.display="block";

    // Agora, para sumir com a bolinha do menu que fica atrás do x
    btnMenu = document.getElementsByClassName("btn-menu");
    btnMenu[0].style.display = "none";

}

function btnFechaMenu(){
    menu = document.getElementsByClassName("menu");
    menu[0].style.display="none";

    // Agora, para sumir com a bolinha do menu que fica atrás do x
    btnMenu = document.getElementsByClassName("btn-menu");
    btnMenu[0].style.display = "block";

}


const form = document.getElementById('form');
const mensagemIdade = document.getElementById('mensagemIdade');
const btnChecarIdade = document.getElementById('btnChecarIdade');	

form.onsubmit = (e) => {
	e.preventDefault();
	const { nome, email, assunto, mensagem, idade } = form;

const formData = {
	nome: nome.value,
	email: email.value,
	assunto: assunto.value,
	mensagem: mensagem.value,
	idade: idade.value,
};

let validation = validateForm(formData);

  if (validation === true) {
    window.location = 'response.html';
    return;
  }

  return alert(`Favor preencher o campo ${validation}`);
};

function validateForm(data) {
	let fieldsToCheck = ['nome', 'email', 'assunto', 'mensagem', 'idade'];

	for (let i = 0; i < fieldsToCheck.length; i++) {
		if (data[fieldsToCheck[i]] === '') {
		  return fieldsToCheck[i];
		}
	  }
	
	  return true;
	}
	

btnChecarIdade.onclick = () => {
const { idade } = form;

if (idade.value === '') {
	return alert('Preencha o ano em que seu pet nasceu para calcular sua idade :)');
	}


mensagemIdade.style.display = 'inline';
mensagemIdade.innerText = `A idade do seu melhor amigo é: ${calcularIdade(idade.value)} anos`;
};



function calcularIdade(dogYear) {
	
	const currentYear = new Date().getFullYear();
		return currentYear - dogYear;
}
	
