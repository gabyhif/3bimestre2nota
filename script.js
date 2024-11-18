const story = {
    1: {
        text: "Após uma tempestade misteriosa, você descobre um portal brilhante no meio de uma cidade inundada. Ao se aproximar, Haru, um jovem de cabelos azulados, surge e alerta: 'Esse portal está trazendo o caos. Precisamos selá-lo!' O que você faz?",
        choices: [
            { text: "Seguir Haru e tentar selar o portal", next: 2 },
            { text: "Ignorar Haru e explorar a cidade sozinha", next: 3 },
        ]
    },
    2: {
        text: "Você e Haru tentam selar o portal, mas criaturas feitas de bolhas começam a surgir. Haru entrega a você uma chave especial. 'Use isso para alcançar o núcleo do portal!' O que você faz?",
        choices: [
            { text: "Usar a chave e selar o portal", next: 4 },
            { text: "Lutar contra as criaturas para proteger Haru", next: 5 },
        ]
    },
    3: {
        text: "Explorando a cidade sozinha, você encontra outro portal, mas sem Haru, não sabe como selá-lo. Criaturas começam a te perseguir. Fim de jogo.",
        choices: []
    },
    4: {
        text: "Com a chave de Haru, você sela o portal. A cidade começa a voltar ao normal, mas Haru percebe outro portal aberto no horizonte. 'Ainda não acabou. Precisamos continuar!' O que você faz?",
        choices: [
            { text: "Seguir Haru até o próximo portal", next: 6 },
            { text: "Questionar Haru sobre quem ele realmente é", next: 7 },
        ]
    },
    5: {
        text: "Você luta bravamente contra as criaturas, mas elas são muitas. Haru tenta te ajudar, mas ambos são engolidos pelo portal. Fim de jogo.",
        choices: []
    },
    6: {
        text: "Vocês chegam a uma torre submersa, onde o maior portal está localizado. Haru explica que ele faz parte do equilíbrio do mundo e precisa entrar no portal para selá-lo por dentro. O que você faz?",
        choices: [
            { text: "Permitir que Haru entre no portal sozinho", next: 8 },
            { text: "Entrar no portal junto com Haru", next: 9 },
        ]
    },
    7: {
        text: "Haru confessa que é uma manifestação da água criada para proteger o mundo. No entanto, sua existência depende dos portais. Ele pede sua ajuda. O que você faz?",
        choices: [
            { text: "Decidir confiar em Haru e continuar ajudando-o", next: 6 },
            { text: "Recusar-se a ajudá-lo, temendo que ele esconda algo", next: 3 },
        ]
    },
    8: {
        text: "Haru entra no portal sozinho e o sela, mas desaparece no processo. Você retorna à cidade, que agora está em paz, mas sente falta de Haru. Fim de jogo.",
        choices: []
    },
    9: {
        text: "Você e Haru entram no portal juntos, selando-o de dentro. No entanto, isso conecta sua essência à dele, unindo suas almas ao equilíbrio do mundo. Parabéns, fim de jogo!",
        choices: []
    }
};

let path = [];

function loadStory(trechoId) {
    const content = document.getElementById('content');
    const trecho = story[trechoId];

    if (!trecho) return;

    path.push(trechoId);

    content.innerHTML = `<p>${trecho.text}</p>`;

    if (trecho.choices.length > 0) {
        trecho.choices.forEach(choice => {
            const choiceElement = document.createElement('div');
            choiceElement.className = 'choice';
            choiceElement.innerHTML = `<a href="#" onclick="loadStory(${choice.next})">${choice.text}</a>`;
            content.appendChild(choiceElement);
        });
    } else {
        // Exibir o caminho percorrido no final do jogo
        content.innerHTML += `<p><strong>Fim de jogo!</strong></p>`;
        content.innerHTML += `<p><strong>Caminho percorrido:</strong></p>`;
        const pathElement = document.createElement('ul');
        path.forEach(step => {
            const listItem = document.createElement('li');
            listItem.textContent = `Passo ${step}: ${story[step].text}`;
            pathElement.appendChild(listItem);
        });
        content.appendChild(pathElement);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadStory(1);
});
