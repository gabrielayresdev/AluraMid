const teclas = document.querySelectorAll(".tecla")
const audios = document.querySelectorAll("audio")

teclas.forEach(function (tecla, index) {
    tecla.addEventListener("click", function () {
        let classe = `#som_${this.classList[1]}`
        tocaSom(classe)
    })
    tecla.addEventListener("keydown", function () {
        if (event.code === "Enter" || event.code === "Space") {
            this.classList.add("ativa")
        }
    })
    tecla.addEventListener("keyup", function (event) {
        if (event.code === "Enter" || event.code === "Space") {
            this.classList.remove("ativa")
        }
    })
})

function tocaSom(classe) {
    audio = document.querySelector(classe)
    if (audio === null) {
        console.log("Elemento não existe")
    } else if (audio.localName === "audio") {
        audio.play()
    } else {
        console.log("Elemento não é um áudio")
    }
}