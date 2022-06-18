let stop = 'continua';
let qtdCartas;
while (stop != 'Stop') {
    qtdCartas = prompt("Com quantas cartas quer jogar? (pares de 4 à 14)");

    if (qtdCartas != 4 && qtdCartas != 6 && qtdCartas != 8 && qtdCartas != 10 && qtdCartas != 12 && qtdCartas != 14) {
        stop = 'continua';
    } else {
        stop = 'Stop';
    }
}

const todasAsCartas = [
    {nome: 'bobrossparrot.gif', numero: 'one'},
    {nome: 'explodyparrot.gif', numero: 'two'},
    {nome: 'fiestaparrot.gif', numero: 'Three'},
    {nome: 'metalparrot.gif', numero: 'four'},
    {nome: 'revertitparrot.gif', numero: 'five'},
    {nome: 'tripletsparrot.gif', numero: 'six'},
    {nome: 'unicornparrot.gif', numero: 'seven'}
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
        <div class="card ${backCards[index].numero}" onclick="flip(this)" data-identifier="card">
            <div class="face front" data-identifier="front-face">
                <img src="./images/front.png" class="parrot">
            </div>
            <div class="face back" data-identifier="back-face">
                <img src="./images/${backCards[index].nome}" class="img">
            </div>
        </div>
    `;
    document.querySelector(".container").innerHTML += cartas;
}

let cardVirado = '';
let tentativas = 0;

function flip(elemento) {
    elemento.classList.add("flip");
    verificarCartas ();

    contarTentativas();
    conferirJogo();
}

function contarTentativas() {
    tentativas = tentativas + 1;
}

function conferirJogo() {
    const cartasNaMesa = document.querySelectorAll(".flip").length;
    if (cartasNaMesa == qtdCartas) {
        alert(`Parabéns! Você finalizou o jogo com ${tentativas} tentativas!`);
    }
}

function verificarCartas () {
    let novoCard = document.querySelector("elemento .img");
        if (cardVirado == '') {
            if (cardVirado != novoCard) {
                cardVirado.classList.remove("flip");
                novoCard.classList.remove("flip");
                cardVirado = '';
            }
        } else {
            cardVirado = document.querySelector("elemento .img");
        }
}