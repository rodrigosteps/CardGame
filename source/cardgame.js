
const imagens = [
    'sukunaCard.webp', 'itadoriCard.webp', 'nobaraCard.webp',
    'gojoCard.webp', 'pandaCard.webp', 'jogoCard.webp',
    'mahogaraCard.webp', 'nanamiCard.webp', 'hanamiCard.webp',
    'inumakiCard.webp', 'makiCard.webp', 'mahitoCard.webp',
    'megumiCard.webp'
];

// Função de Preload
const precarregarImagens = () => {
    imagens.forEach((nome) => {
        const img = new Image();
        img.src = `./source/assets/${nome}`;
    });
};

window.onload = precarregarImagens; // Executa o preload quando a janela carregar

//funcção para escolher uma carta

function pickup() {
//carregar som de carta ao clickar no botão
    const audio = document.getElementById('audioPlay');
    setTimeout(() => { audio.play(); }, 400)
//constantes da func.
    const playerName = document.getElementById("nome").value;
    const playerDate = document.getElementById("date").value;
    const imgTag = document.getElementById("Personagem");
    const playerDisplay = document.getElementById("playerid");
//caminho para carregar as imagens
    const pasta = './source/assets/'
    const imagens = [
        'sukunaCard.webp',
        'itadoriCard.webp',
        'nobaraCard.webp',
        'gojoCard.webp',
        'pandaCard.webp',
        'jogoCard.webp',
        'mahogaraCard.webp',
        'nanamiCard.webp',
        'hanamiCard.webp',
        'inumakiCard.webp',
        'makiCard.webp',
        'mahitoCard.webp',
        'megumiCard.webp'];

//validação de infos
    if (playerName.trim() !== "" && playerDate !== "") {
        playerDisplay.innerHTML = `${playerName}, No mundo de Jujutsu você seria:`;
//gatilho da func.
        const indice = Math.floor(Math.random() * imagens.length);

        const escolhida = imagens[indice];

        imgTag.src = `${pasta}${escolhida}`;
        imgTag.classList.remove('resultado');

        void imgTag.offsetWidth; //Força o navegador a "renderizar" o elemento sem a classe
       
        imgTag.classList.add('resultado');  //Adiciona a classe novamente para disparar a animação
    }

    else {
        playerDisplay.innerHTML = 'Preencha seu nome e sua idade';//fallback das infos
    }
}
