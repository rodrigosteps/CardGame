



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
            'sukunaCard.png',
            'itadoriCard.png',
            'nobaraCard.png',
            'gojoCard.png',
            'pandaCard.png',
            'jogoCard.png',
            'todoCard.png',
            'nanamiCard.png',
            'hanamiCard.png',
            'inumakiCard.png',
            'makiCard.png',
            'mahitoCard.png',
            'megumiCard.png'];
            
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
