

function classificarHeroi() {
    const experiencia = parseInt(document.getElementById('experiencia').value);

    const heroi = document.getElementById('idNameHeroi').value;

    let nivelHeroi = determinarNivelHeroi(experiencia);  

    document.getElementById('resultado').innerText = `${heroi} tem ${experiencia} pontos e seu nível é: ${nivelHeroi}`;
}

function determinarNivelHeroi(xp) {
    let nivel = "";

    if (xp <= 1000) {
        nivel = "Ferro"
    }
    else if (xp <= 2000) {
        nivel = "Bronze"
    }
    else if (xp <= 6000) {
        nivel = "Prata"
    }
    else if (xp <= 7000) {
        nivel = "Ouro"
    }
    else if (xp <= 8000) {
        nivel = "Platina"
    }
    else if (xp <= 9000) {
        nivel = "Ascendente"
    }
    else if (xp <= 10000) {
        nivel = "Imortal"
    }
    else if (xp <= 10001) {
        nivel = "Radiante"
    }

    return nivel;
}






