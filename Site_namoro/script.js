// Armazena referências aos botões clonados
let noButtonClones = [];

function handleClick(response) {
    if (response === 'no') {
        cloneNoButton();
        removeOriginalNoButton(); // Remove o botão "Não" original após o primeiro clique
    } else {
        alert('Você é a pessoa mais incrível do mundo! 💖');
    }
}

function cloneNoButton() {
    const container = document.querySelector('.container');
    const noButton = document.getElementById('no-button');

    // Clona o botão "Não"
    const noButtonClone = noButton.cloneNode(true);
    
    // Gera uma nova posição aleatória para o botão clonado
    const x = Math.random() * (window.innerWidth - 100) + 'px';
    const y = Math.random() * (window.innerHeight - 50) + 'px';

    // Adiciona a posição aleatória ao estilo do botão clonado
    noButtonClone.style.position = 'absolute';
    noButtonClone.style.left = x;
    noButtonClone.style.top = y;

    // Adiciona o botão clonado ao contêiner
    container.appendChild(noButtonClone);

    // Armazena a referência ao botão clonado
    noButtonClones.push(noButtonClone);
}

function removeOriginalNoButton() {
    const noButton = document.getElementById('no-button');
    if (noButton) {
        noButton.remove(); // Remove o botão "Não" original
    }
}

function showMessage(message) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.textContent = message; // Define o texto da mensagem
    messageContainer.classList.remove('hidden'); // Torna o contêiner da mensagem visível
}
