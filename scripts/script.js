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

const todasAsCartas = [
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif',
]

let backCards = [];

for (let index = 0; index < (qtdCartas/2); index++) {
    backCards.push(todasAsCartas[index]);
}

for (let index = 0; index < (qtdCartas/2); index++) {
    backCards.push(backCards[index]);
}

backCards.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}

for (let index = 0; index < qtdCartas; index++) {
    const cartas = `
        <div class="card" onclick="flip(this)" data-identifier="card">
            <div class="face front" data-identifier="front-face">
                <img src="./images/front.png" class="parrot">
            </div>
            <div class="face back" data-identifier="back-face">
                <img src="./images/${backCards[index]}">
            </div>
        </div>
    `;
    document.querySelector(".container").innerHTML += cartas;
}

function flip(elemento) {
    elemento.classList.toggle("flip");

    contarTentativas();
}

let tentaas = 0;

function contarTentativas() {
    tentativas = tentativas + 1;
}