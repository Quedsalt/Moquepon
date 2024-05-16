//INICIALIZACION DE PROCESOS DEL JUEGO
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
sectionSeleccionarAtaque.style.display = "none"
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascotas")
const botonFuego = document.getElementById("boton-Fuego")
const botonAgua = document.getElementById("boton-Agua")
const botonTierra = document.getElementById("boton-Tierra")
const botonReiniciar = document.getElementById("boton-reiniciar")

//SELECCIONAR MASCOTAS
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputHipodoge = document.getElementById("Hipodoge")
const inputCapipego = document.getElementById("Capipego")
const inputRatigueya = document.getElementById("Ratigueya")
const spanMascotaJugador = document.getElementById("mascota-jugador")

//SELECCION ALEATORIA DE MASCOTAS ENEMIGAS
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

//COMBATE
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

//informe de batalla
const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-Del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-Del-enemigo")

let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let Hipodoge = new Mokepon("Hipodoge", "./assents/megaHipodogue-image-2024-05-14T14_23_58.281Z.jpeg", 5)
let Capipego = new Mokepon("Capipego", "./assents/carpincho-image-2024-05-14T14_24_43.868Z.jpeg", 5)
let Ratigueya = new Mokepon("Ratigueya", "./assents/pydos-6e458237-73df-40fb-be7c-2d4b477be360.webp", 5)


//INICIALIZACION DE PROCESOS DEL JUEGO
function iniciarJuego(){
    sectionReiniciar.style.display = "none"
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    botonReiniciar.addEventListener("click", reiniciarJuego)    
}

//SELECCIONAR MASCOTAS
function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = "none"

    sectionSeleccionarAtaque.style.display = "flex"

  //informe de sellecion de mascota

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipego.checked) {
        spanMascotaJugador.innerHTML = "Capipego"
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("No has elegido ninguna mascota")
    }

    seleccionarMascotaEnemigo()

}

//SELECCION ALEATORIA DE MASCOTAS ENEMIGAS
function seleccionarMascotaEnemigo(){
    let Mascotaleatorio = aleatorio(1, 3)
        
    if (Mascotaleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (Mascotaleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipego"
    } else  {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
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

    let nuevoAtaqueDelJugdor = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugdor.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugdor)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

//informe Ganador
function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true
    
    sectionReiniciar.style.display = "block"
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