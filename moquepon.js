function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascotas")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

//seleccionador de mascota

function seleccionarMascotaJugador(){
    let inputHipoge = document.getElementById("Hipoge")
    let inputCapipego = document.getElementById("Capipego")
    let inputRatigueya = document.getElementById("Ratigueya")
    let inputLangostelvis = document.getElementById("Langostelvis")
    let inputTucapalma = document.getElementById("Tucapalma")
    let inputPydos = document.getElementById("Pydos")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    //informe de sellecion de mascota

    if (inputHipoge.checked) {
        spanMascotaJugador.innerHTML = "Hipoge"
    } else if (inputCapipego.checked) {
        spanMascotaJugador.innerHTML = "Capipego"
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis"
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = "Tucapalma"
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = "Pydos"
    } else {
        alert("No has elegido ninguna mascota")
    }
}

//informe de html cargado

window.addEventListener("load", iniciarJuego)