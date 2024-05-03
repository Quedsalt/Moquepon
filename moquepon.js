function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascotas")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    let inputHipoge = document.getElementById("Hipoge")
    let inputCapipego = document.getElementById("Capipego")
    let inputRatigueya = document.getElementById("Ratigueya")
    let inputLangostelvis = document.getElementById("Langostelvis")
    let inputTucapalma = document.getElementById("Tucapalma")
    let inputPydos = document.getElementById("Pydos")

    if (inputHipoge.checked) {
        alert("Seleccionaste a  Hipoge")
    } else if (inputCapipego.checked) {
        alert(" Seleccionaste a Capipego")
    } else if (inputRatigueya.checked) {
        alert(" Seleccionaste a Ratigueya")
    } else if (inputLangostelvis.checked) {
        alert(" Seleccionaste a Langostelvis")
    } else if (inputTucapalma.checked) {
        alert(" Seleccionaste a Tucupalma")
    } else if (inputPydos.checked) {
        alert(" Seleccionaste a Pydos")
    } else {
        alert("No has elegido ninguna mascota")
    }
}

window.addEventListener("load", iniciarJuego)