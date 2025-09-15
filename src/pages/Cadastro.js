import LoginForm from "../components/LoginForm.js";
import Navbar from "../components/NavBar.js";

export default function renderCadastroPage() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    // Criando um container centralizado com Bootstrap
    const container = document.createElement('div');
    container.className = 'd-flex justify-content-center align-items-center vh-100 bg-light';
    
    const card = document.createElement('div');
    card.className = 'card shadow-lg p-4 rounded-4 cadastro-card';
    card.style.width = '100%';
    card.style.maxWidth = '400px';

    const titulo = document.createElement('h2');
    titulo.textContent = 'Crie sua conta';
    titulo.className = 'text-center mb-4 titulo';

    // Campo Nome
    const nome = document.createElement('input');
    nome.type = "text";
    nome.placeholder = "Digite seu nome";
    nome.className = "form-control mb-3";

    // Importando o form existente
    const formulario = LoginForm();

    // Campo Confirmar Senha
    const confSenha = document.createElement('input');
    confSenha.type = "password";
    confSenha.placeholder = "Confirme sua senha";
    confSenha.className = "form-control mb-3";

    // Alterando botão de registrar
    const btnRegister = formulario.querySelector('button');
    btnRegister.textContent = "Criar conta";
    btnRegister.className = "btn btn-primary w-100 py-2";

    // Botão de voltar
    const btnVoltar = document.createElement('button');
    btnVoltar.textContent = "Já tenho uma conta";
    btnVoltar.className = 'btn btn-link w-100 mt-3';
    btnVoltar.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = "login";
    });

    // Montagem da tela
    card.appendChild(titulo);
    card.appendChild(nome);
    formulario.querySelector('input[type="password"]').after(confSenha);
    card.appendChild(formulario);
    card.appendChild(btnVoltar);

    container.appendChild(card);
    divRoot.appendChild(container);
}
