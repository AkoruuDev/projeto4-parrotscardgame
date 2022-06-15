/*
function escolhaDaQtdDeCartas() {
    let qtdCartas = prompt("Com quantas cartas quer jogar? (de 4 à 14)");

    if (qtdCartas in Range(4, 6, 8, 10, 12, 14)) {
        escolhaDaQtdDeCartas();    
    }else{
        escolhaDaQtdDeCartas();
    }
}

escolhaDaQtdDeCartas()
*/


let qtdCartas = Number(prompt("Com quantas cartas quer jogar?"));
let contador = 0;
let cartas = [];

while (contador < qtdCartas) {
    cartas.push(`
            <div class="card" data-identifier="card">
                <div class="frente" data-identifier="front-face">
                    <img src="/images/front.png" class="parrot">
                </div>
                <div class="tras" data-identifier="back-face">

                </div>
            </div>
    `)

    colocarNaTela()

    contador = contador + 1;
}


function colocarNaTela() {
    const parrot = document.querySelector(".container");
    parrot.innerHTML = cartas;
}