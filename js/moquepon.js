//INICIALIZACION DE PROCESOS DEL JUEGO
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
sectionSeleccionarAtaque.style.display = "none"
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascotas")

//SELECCIONAR MASCOTAS
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
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
const botonReiniciar = document.getElementById("boton-reiniciar")

//contenedores
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contendeorAtaques")

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo
let opcionDeMokepones

let inputHipodoge
let inputCapipego
let inputRatigueya
let mascotaJugador
let ataquesMokepon

let botonAgua
let botonFuego
let botonTierra
let botones = []
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Hipodoge = new Mokepon("Hipodoge", "./assents/megaHipodogue-image-2024-05-14T14_23_58.281Z.jpeg", 5)
let Capipego = new Mokepon("Capipego", "./assents/carpincho-image-2024-05-14T14_24_43.868Z.jpeg", 5)
let Ratigueya = new Mokepon("Ratigueya", "./assents/pydos-6e458237-73df-40fb-be7c-2d4b477be360.webp", 5)

Hipodoge.ataques.push(
    { nombre: "💧", id: "boton-Agua" },
    { nombre: "💧", id: "boton-Agua" },
    { nombre: "💧", id: "boton-Agua" },
    { nombre: "🔥", id: "boton-Fuego" },
    { nombre: "🌱", id: "boton-Tierra" },
)

Capipego.ataques.push(
    { nombre: "🌱", id: "boton-Tierra" },
    { nombre: "🌱", id: "boton-Tierra" },
    { nombre: "🌱", id: "boton-Tierra" },
    { nombre: "💧", id: "boton-Agua" },
    { nombre: "🔥", id: "boton-Fuego" },
)

Ratigueya.ataques.push(
    { nombre: "🔥", id: "boton-Fuego" },
    { nombre: "🔥", id: "boton-Fuego" },
    { nombre: "🔥", id: "boton-Fuego" }, 
    { nombre: "💧", id: "boton-Agua" },
    { nombre: "🌱", id: "boton-Tierra" },
)

mokepones.push(Hipodoge, Capipego, Ratigueya)

//INICIALIZACION DE PROCESOS DEL JUEGO
function iniciarJuego(){
    sectionReiniciar.style.display = "none"

    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${Mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${Mokepon.nombre} >
            <p>${Mokepon.nombre} </p>
            <img src=${Mokepon.foto} alt=${Mokepon.nombre} >
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputHipodoge = document.getElementById("Hipodoge")
     inputCapipego = document.getElementById("Capipego")
     inputRatigueya = document.getElementById("Ratigueya")

    })
  
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    botonReiniciar.addEventListener("click", reiniciarJuego)    
}

//SELECCIONAR MASCOTAS
function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = "none"

    sectionSeleccionarAtaque.style.display = "flex"

  //informe de sellecion de mascota

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id 
        mascotaJugador = inputHipodoge.id 

    } else if (inputCapipego.checked) {
        spanMascotaJugador.innerHTML = inputCapipego.id
        mascotaJugador = inputCapipego.id

    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert("No has elegido ninguna mascota")
    }


    seleccionarMascotaEnemigo()
    extraerAtaques(mascotaJugador)
    secuenciaAtaque()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques;
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque  BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonAgua = document.getElementById("boton-Agua")
    botonTierra = document.getElementById("boton-Tierra")
    botonFuego = document.getElementById("boton-Fuego")
    botones = document.querySelectorAll(".BAtaque")    

}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥"){
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
            }else if (e.target.textContent === "💧"){
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
            }else {
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
            }
        })
    })
}

//SELECCION ALEATORIA DE MASCOTAS ENEMIGAS
function seleccionarMascotaEnemigo(){
    let MascotaAleatorio = aleatorio(0, mokepones.length -1)
        
    spanMascotaEnemigo.innerHTML = mokepones[MascotaAleatorio].nombre
    secuenciaAtaque()
}

//ATAQUES

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