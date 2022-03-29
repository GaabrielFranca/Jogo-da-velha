let tabuleiro = ['', '', '', '', '', '', '', '', '',]
let contador = 0
let fimDeJogo = false

let verificador = ["o", "x"]



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

function trocarEntreXouO(posicao) {

    if (fimDeJogo) {
        return
    }

    if (tabuleiro[posicao] == '') {
        tabuleiro[posicao] = verificador[contador]

        fimDeJogo = conferirVitoria()

        if (fimDeJogo == false) {
            if (contador == 0) {
                contador = 1
            }
            else {
                contador = 0
            }
        }

    }
    return fimDeJogo
}


function conferirVitoria() {


    for (let i = 0; i < vitoria.length; i++) {
        let seq = vitoria[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (tabuleiro[pos1] == tabuleiro[pos2] &&
            tabuleiro[pos1] == tabuleiro[pos3] &&
            tabuleiro[pos1] != "") {
            return true
        }


    }
    return false
}


function resetarGamer() {


    if (fimDeJogo === true) {
        fimDeJogo = false
    }

    if (contador === 1) {
        contador = 0
    }

    if (tabuleiro != "") {
        tabuleiro = ['', '', '', '', '', '', '', '', '',]
    }
}








