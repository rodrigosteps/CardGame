



//funcção para escolher uma carta

function pickup() {


    const playerName = document.getElementById("nome").value;
    const imgTag = document.getElementById("Personagem");
    const playerDisplay = document.getElementById("playerid");
    //validação de infos

    if (playerName !== "") {
        playerDisplay.innerHTML = `${playerName}, No mundo de Jujutsu você seria:`;

        const imagens = [
            'sukunaCard.PNG','itadoriCard.PNG','nobaraCard.PNG','gojoCard.PNG', 'megumiCard.PNG'];
       
            const pasta = './source/assets/'

            const indice = Math.floor(Math.random() * imagens.length);

            const escolhida = imagens[indice];

            imgTag.src= pasta + escolhida;
            imgTag.classList.remove('resultado');

        // 2. TRUQUE: Força o navegador a "renderizar" o elemento sem a classe
        void imgTag.offsetWidth; 

        // 3. Adiciona a classe novamente para disparar a animação
        imgTag.classList.add('resultado');
        }
    else {
        alert('Insira seu nome');
    }

}
