let stop = 'continua';
let qtdCartas;
function escolherCartas() {
    while (stop != 'Stop') {
        qtdCartas = prompt("Com quantas cartas quer jogar? (pares de 4 à 14)");

        if (qtdCartas % 2 == 0 && qtdCartas < 15 && qtdCartas > 3)  {
            stop = 'Stop';
        }
    }
}

escolherCartas();

const todasAsCartas = [
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif'
]

let backCards = [];

function lancarCartas () {
    for (let index = 0; index < (qtdCartas/2); index++) {
        backCards.push(todasAsCartas[index]);
        backCards.push(todasAsCartas[index]);
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
                    <img src="./images/${backCards[index]}" class="img">
                </div>
            </div>
        `;
        document.querySelector(".container").innerHTML += cartas;
    }
}

lancarCartas();

let tentativas = 0;

function flip(elemento) {
    tentativas ++;
    elemento.classList.add("flip");

    let verificador = document.querySelectorAll(".virado");
    if (verificador.length <= 1) {
        elemento.classList.add("virado");
        testeDeComparacao();
    }
}

function testeDeComparacao() {
    let verificador = document.querySelectorAll(".virado");
    if (verificador.length == 2) {
        setTimeout (comparar,1200)
    }
}

function comparar(){
    let verificador = document.querySelectorAll(".virado");
    if (verificador.length == 2) {
        let carta1 = verificador[0].querySelector(".img").currentSrc;
        let carta2 = verificador[1].querySelector(".img").currentSrc;
        if (carta1 == carta2) {
            verificador[0].classList.remove("virado");
            verificador[1].classList.remove("virado");
        } else {
            verificador[0].classList.remove("virado");
            verificador[1].classList.remove("virado");
            verificador[0].classList.remove("flip");
            verificador[1].classList.remove("flip");
        }
    }
    conferirJogo (); 
}

function conferirJogo() {
    const cartasNaMesa = document.querySelectorAll(".flip").length;
    if (cartasNaMesa == qtdCartas) {
        alert(`Parabéns! Você finalizou o jogo com ${tentativas} tentativas!`);
        let rejogar = prompt("Quer jogar de novo? (y/n)");
        if (rejogar == 'y') {
            window.location.reload();
        } else {
            alert("Obrigado por Jogar! :D")
        }
    }
}