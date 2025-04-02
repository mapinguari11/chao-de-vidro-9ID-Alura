let jogar = true;

while (jogar) {
    alert("Vamos jogar!")
    
    const totalRodadas = 3; //para poder modificar o número de rodadas com mais facilidade
    let rodada = 1;
    let venceu = false;

    while (rodada <= totalRodadas) {
        //Interage com o jogador
        escolhaJogador = prompt(`Nível ${rodada}, escolha vidro (1, 2 ou 3):`);
        
        //Verifica se jogador usou um valor válido e cria loop até digitar valor válido
        while (escolhaJogador !== "1" && escolhaJogador !== "2" && escolhaJogador !== "3") {
            escolhaJogador = prompt("Opção inválida. Digite apenas 1, 2 ou 3!");
        }
    
        pisoQuebrado = Math.floor(Math.random()*3 + 1);
    
        //Revela resultado da escolha
        if (escolhaJogador == pisoQuebrado) {
            alert("O vidro quebrou! Você perdeu!");
            break; //interrompe o fluxo
        } else {
            alert(`Você passou! O piso quebrado estava no número ${pisoQuebrado}`);
            if (rodada == totalRodadas) { //Se o jogador vencer a última rodada
                venceu = true;
            }
        }
    
        rodada++;
    }    
    
    if (venceu) {
        alert("Parabéns! Você venceu!");
    }

    let jogarNovamente = prompt("Quer jogar de novo? Digite S ou N.").toLowerCase();
    if (jogarNovamente === "s") {
        rodada = 1;
        venceu = false;
    } else {
        jogar = false;
    }
}




