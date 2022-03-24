

document.addEventListener("DOMContentLoaded", function () {

    let quadrados = document.querySelectorAll(".quadrado")

    quadrados.forEach((quadrado) => {
        quadrado.addEventListener(`click`, identificarClick)

    })
})

function identificarClick(evento) {
    let quadrado = evento.target.id

    if (trocarEntreXouO(quadrado)) {

        setTimeout(() => {
            alert("acabou")
        }, 1)
    }
    adicionarXouO()


}


function adicionarXouO() {


    let blocos = document.querySelectorAll(".quadrado")

    blocos.forEach((chave) => {
        let posicao = chave.id
        let simbolo = tabuleiro[posicao]


        chave.innerHTML = `<div class="${simbolo}"></div>`

    }


    )

}

