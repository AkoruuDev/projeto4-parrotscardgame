function escolhaDaQtdDeCartas() {
    let qtdCartas = prompt("Com quantas cartas quer jogar? (de 4 à 14)");

    if (qtdCartas in Range(4, 6, 8, 10, 12, 14)) {
        escolhaDaQtdDeCartas();    
    }else{
        escolhaDaQtdDeCartas();
    }
}

escolhaDaQtdDeCartas()
