document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleNoticias");
    const noticiasContainer = document.querySelector(".noticias__container");

    if (toggleBtn && noticiasContainer) {
        toggleBtn.addEventListener("click", () => {
            if (noticiasContainer.style.display === "none") {
                noticiasContainer.style.display = "flex"; // ou "block" dependendo do seu layout
                toggleBtn.textContent = "Esconder Notícias";
            } else {
                noticiasContainer.style.display = "none";
                toggleBtn.textContent = "Mostrar Notícias";
            }
        });
    }
});

////////////////////////////////////////

document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    const usuario = document.getElementById('cadastroUsuario').value.trim();
    const senha = document.getElementById('cadastroSenha').value;

    if (!usuario || !senha) {
        mostrarMensagem("Preencha todos os campos para cadastrar.");
        return;
    }

    if (localStorage.getItem(usuario)) {
        mostrarMensagem("Usuário já cadastrado.");
        return;
    }

    localStorage.setItem(usuario, senha);
    mostrarMensagem("Cadastro realizado com sucesso!", true);
    this.reset();
});

document.getElementById('formLogin').addEventListener('submit', function(e) {
    e.preventDefault();
    const usuario = document.getElementById('loginUsuario').value.trim();
    const senha = document.getElementById('loginSenha').value;

    const senhaArmazenada = localStorage.getItem(usuario);
    if (!senhaArmazenada) {
        mostrarMensagem("Usuário não encontrado.");
    } else if (senhaArmazenada !== senha) {
        mostrarMensagem("Senha incorreta.");
    } else {
        mostrarMensagem(`Bem-vindo, ${usuario}!`, true);
    }
});

function mostrarMensagem(msg, sucesso = false) {
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = msg;
    mensagem.style.color = sucesso ? 'green' : 'red';
}

