let stop = 'continua';
let qtdCartas;
while (stop != 'Stop') {
    qtdCartas = prompt("Com quantas cartas quer jogar? (de 4 à 14)");

    if (qtdCartas != 4 && qtdCartas != 6 && qtdCartas != 8 && qtdCartas != 10 && qtdCartas != 12 && qtdCartas != 14) {
        stop = 'continua';
    } else {
        stop = 'Stop';
    }
}

for (let index = 0; index < qtdCartas; index++) {
    const cartas = `
        <div class="card" onclick="flip(this)" data-identifier="card">
            <div class="face front" data-identifier="front-face">
                <img src="./images/front.png" class="parrot">
            </div>
            <div class="face back" data-identifier="back-face">
                <img src="./images/metalparrot.gif">
            </div>
        </div>
    `;
    document.querySelector(".container").innerHTML += cartas;
}

function flip(elemento) {
    elemento.classList.toggle("flip");
}