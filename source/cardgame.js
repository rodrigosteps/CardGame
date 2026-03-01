



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
            'sukunaCard.PNG',
            'itadoriCard.PNG',
            'nobaraCard.PNG',
            'gojoCard.PNG',
            'pandaCard.PNG',
            'jogoCard.PNG',
            'todoCard.PNG',
            'nanamiCard.PNG',
            'hanamiCard.PNG',
            'inumakiCard.PNG',
            'makiCard.PNG',
            'mahitoCard.PNG',
            'megumiCard.PNG'];
            
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
