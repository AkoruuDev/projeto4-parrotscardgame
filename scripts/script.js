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
        <div class="card" data-identifier="card">
            <div class="frente" data-identifier="front-face">
                <img src="./images/front.png" class="parrot">
            </div>
            <div class="tras" data-identifier="back-face">

            </div>
        </div>
    `;
    document.querySelector(".container").innerHTML += cartas;
}