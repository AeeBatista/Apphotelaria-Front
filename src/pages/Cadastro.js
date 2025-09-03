import LoginForm from "../components/LoginForm.js";
import Navbar from "../components/NavBar.js";

export default function renderCadastroPage() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';


    // Dentro de divRoot terá uma div chamada container e em container estará o formulario
    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg'; // Classe do Bootstrap para criar um card
    container.style.width = '100%'; // Aplicada a largura de 100% na div container para ocupar a tela
    container.style.maxWidth = '400px'; // Até que atinja o máximo de 400px

    divRoot.appendChild(container); // divRoot contém a nova div

    const titulo = document.createElement('h2');
    titulo.textContent = 'Cadastre-se';
    titulo.className = 'titulo';

    const nome = document.createElement('input');
    nome.placeholder = "Digite seu nome";

   


    const btnVoltar = document.createElement('button');
    btnVoltar.textContent = "Ja tenho uma conta";
    btnVoltar.className = 'btn btn-link mt-2 text-center'; // Classe do Bootstrap para estilizar o botão



    const formulario = LoginForm();

    const confSenha = document.createElement('input');
    confSenha.placeholder = "senha";
    confSenha.placeholder = ("Confirme sua senha");
    
    btnVoltar.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = "login";
    });

    const btnRegister = formulario.querySelector('button');
    btnRegister.textContent = "Criar conta ";


    container.appendChild(titulo);
    container.appendChild(nome); // Adiciona o input de nome ao container
    formulario.querySelector('input[type="password"]').after(confSenha); // Adiciona o campo de confirmação de senha após o campo de senha
    container.appendChild(formulario); // Nova div container, já dentro de divRoot, contém o form
    container.appendChild(btnVoltar); // Adiciona o botão de voltar ao container
}