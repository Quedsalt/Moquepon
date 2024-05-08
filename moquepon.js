let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//INICIALIZACION DE PROCESOS DEL JUEGO
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascotas")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-Fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-Agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-Tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)    
}

//SELECCIONAR MASCOTAS
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

//SELECCION ALEATORIA DE MASCOTAS ENEMIGAS
function seleccionarMascotaEnemigo(){
    let Mascotaleatorio = aleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
        
    if (Mascotaleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (Mascotaleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipego"
    } else if (Mascotaleatorio == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    } else if (Mascotaleatorio == 4) {
        spanMascotaEnemigo.innerHTML = "Langostelvis"
    } else if (Mascotaleatorio == 5) {
        spanMascotaEnemigo.innerHTML = "Tucapalma"
    } else {
        spanMascotaEnemigo.innerHTML = "Pydos"
    } 
}

//ATAQUES
function  ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function  ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function  ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)


    if (ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    combate()
}

//COMBATE
function combate () {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE ⚔️")
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE 👑")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE 👑")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE 👑")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE 😞")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    
    revisarVidas()
}

//REVISAR LAS VIDAS
function revisarVidas() {
    if(vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! Ganaste👑")
    } else if(vidasJugador == 0){
        crearMensajeFinal("Lo siento, perdiste😞")   
    }
}

//informe de batalla
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", la mascota del enemigo ataco con "+ ataqueEnemigo + " " + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-Fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-Agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-Tierra")
    botonTierra.disabled = true
}

function reiniciarJuego() {
    location.reload()
}

//ALEATORIDAD
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//INFORME DE HTML CARGADO
window.addEventListener("load", iniciarJuego)