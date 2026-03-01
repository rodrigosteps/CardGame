
const imagens = [
    'sukunaCard.webp', 'itadoriCard.webp', 'nobaraCard.webp', 
    'gojoCard.webp', 'pandaCard.webp', 'jogoCard.webp', 
    'todoCard.webp', 'nanamiCard.webp', 'hanamiCard.webp', 
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

// Executa o preload quando a janela carregar
window.onload = precarregarImagens;


//funcção para escolher uma carta

function pickup() {

const audio = document.getElementById('audioPlay');
  setTimeout(()=>{audio.play();},400) 
    const playerName = document.getElementById("nome").value;
    const playerDate = document.getElementById("date").value;
    const imgTag = document.getElementById("Personagem");
    const playerDisplay = document.getElementById("playerid");
    const pasta = './source/assets/'
            const imagens = [
            'sukunaCard.webp',
            'itadoriCard.webp',
            'nobaraCard.webp',
            'gojoCard.webp',
            'pandaCard.webp',
            'jogoCard.webp',
            'todoCard.webp',
            'nanamiCard.webp',
            'hanamiCard.webp',
            'inumakiCard.webp',
            'makiCard.webp',
            'mahitoCard.webp',
            'megumiCard.webp'];
            
            console.log(pasta)
            
            
    //validação de infos

    if (playerName.trim() !== "" && playerDate !== "") {
        playerDisplay.innerHTML = `${playerName}, No mundo de Jujutsu você seria:`;

            const indice = Math.floor(Math.random() * imagens.length);

            const escolhida = imagens[indice];

            imgTag.src= `${pasta}${escolhida}`;
            imgTag.classList.remove('resultado');

        // 2. TRUQUE: Força o navegador a "renderizar" o elemento sem a classe
        void imgTag.offsetWidth; 


        // 3. Adiciona a classe novamente para disparar a animação
        imgTag.classList.add('resultado');
        }
        
    else {
        playerDisplay.innerHTML ='Preencha seu nome e sua idade';
    }
}
