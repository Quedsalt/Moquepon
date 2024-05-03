function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascotas")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

 //seleccionador de mascota

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipego = document.getElementById("Capipego")
    let inputRatigueya = document.getElementById("Ratigueya")
    let inputLangostelvis = document.getElementById("Langostelvis")
    let inputTucapalma = document.getElementById("Tucapalma")
    let inputPydos = document.getElementById("Pydos")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

 //informe de sellecion de mascota

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
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

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){
    let ataquealeatorio = aleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
        
    if (ataquealeatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (ataquealeatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipego"
    } else if (ataquealeatorio == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    } else if (ataquealeatorio == 4) {
        spanMascotaEnemigo.innerHTML = "Langostelvis"
    } else if (ataquealeatorio == 5) {
        spanMascotaEnemigo.innerHTML = "Tucapalma"
    } else {
        spanMascotaEnemigo.innerHTML = "Pydos"
    } 
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

 //informe de html cargado

 window.addEventListener("load", iniciarJuego)