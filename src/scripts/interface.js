

document.addEventListener("DOMContentLoaded", function () {

    let quadrados = document.querySelectorAll(".quadrado")
    let botao = document.getElementById("resetarTabuleiro")
    quadrados.forEach((quadrado) => {
        quadrado.addEventListener(`click`, identificarClick)


    })

    botao.addEventListener("click", resetarGamer)
    botao.addEventListener("click", resetarinterface)


})

function identificarClick(evento) {
    let quadrado = evento.target.id

    if (trocarEntreXouO(quadrado)) {

        setTimeout(() => {
            alert("acabou")

        }, 10)
    }
    adicionarXouO()




}


function adicionarXouO() {


    let blocos = document.querySelectorAll(".quadrado")

    blocos.forEach((chave) => {
        let posicao = chave.id
        let simbolo = tabuleiro[posicao]


        chave.innerHTML = `<div class="${simbolo}"></div>`


    })






}


function resetarinterface() {

    let blocos = document.querySelectorAll(".quadrado")

    blocos.forEach((chave) => {
        let posicao = chave.id
        let simbolo = tabuleiro[posicao]


        chave.innerHTML = `<div class=""></div>`


    })

}
