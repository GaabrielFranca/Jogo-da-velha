let tabuleiro = ['', '', '', '', '', '', '', '', '',]

let contador = 0
let verificador = ["o", "x"]

let GameOver = false

function trocarEntreXouO(posicao) {

    if (GameOver) {
        return
    }

    if (tabuleiro[posicao] == '') {
        tabuleiro[posicao] = verificador[contador]


        GameOver = ConferirVitoria()


        if (contador == 0) {
            contador = 1
        }
        else {
            contador = 0
        }
    }

}


function ConferirVitoria() {
    let vitoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < ConferirVitoria; i++) {
        let seq = ConferirVitoria[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[3]

    }

}








