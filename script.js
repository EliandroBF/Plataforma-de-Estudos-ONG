document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email-input').value;
    const senha = document.getElementById('senha').value;

    const resposta = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify({ email, senha})
    });

    const data = await resposta.json();

    if (resposta.ok){
      // redireciona para página de cursos
      window.location.href = "index.html";
    }
    else{
        document.getElementById('mensagem').textContent = data.mensagem || 'Erro ao fazer login';
    }
});