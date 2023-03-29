const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    let chute = e.results[0][0].transcript;
    if (chute == "game over") {
        document.body.innerHTML = `
            <h2 class="titulo-reiniciar">GAME OVER!</h2>
            <button id="reiniciar" class="btn-reiniciar">Jogar novamente</button>
        `
        document.body.classList.remove("valorCerto")
        document.body.classList.toggle("gameOver")
        console.log("O jogo acabou pois você disse: Game Over!")
    } else if (chute == "jogar novamente") {
        window.location.reload()
    } else {
        exibeChuteNaTela(chute);
        VerificaValorChute(chute);
    }
};

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());
