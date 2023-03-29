function VerificaValorChute(chute) {
    const numero = +chute;

    if (ChuteInvalido(numero)) {
        elementoChute.innerHTML = '<div>Valor inválido</div>'
        return
    }

    if (numeroMaiorOuMaior(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: nº tem de estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="reiniciar" class="btn-reiniciar">Jogar novamente</button>
        `
        document.body.classList.toggle("valorCerto")
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }
};

function ChuteInvalido(numero) {
    return Number.isNaN(numero);
};

function numeroMaiorOuMaior(numero) {
    return numero > maiorValor || numero < menorValor
};

document.body.addEventListener("click", e => {
    if (e.target.id === 'reiniciar') {
        window.location.reload()
    }
});