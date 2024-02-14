//el usuario debe ingresar la cantidad de intentos
const intentos = Number(prompt("Ingrese Intentos : "));
//variable global para guardar la jugada de la maquina
let jugada_maquina;
//contador global de intentos realizados
let van_intentos = 0;
//Funcion donde la maquina por random elige: 0 piedra 1 papel 2 tijera
function random_maquina() {
  let mano_maquina = Math.floor(Math.random() * 3);
  return mano_maquina;
}
//Funcion donde el usuario despues de elegir piedra papel o tijera, se evalua si gano o perdio
function usuario(jugada_usuario) {
  jugada_maquina = random_maquina();
  van_intentos++;
  //verifica la cantidad de intentos realizados
  if (van_intentos <= intentos) {
    if (jugada_usuario == "Piedra") {
      if (jugada_maquina == 1) {
        document.getElementById("ganador").innerHTML =
          "<h1>¡Perdiste!</h1><h2>Usuario : Piedra</h2><h2>Maquina : Papel</h2><h3>Papel le gana a piedra .</h3>";
      } else {
        if (jugada_maquina == 2) {
          document.getElementById("ganador").innerHTML =
            "<h1>¡Ganaste!</h1><h2>Usuario : Piedra</h2><h2>Maquina : Tijera</h2><h3>Piedra le gana a tijera.</h3>";
        } else {
          if (jugada_maquina == 0) {
            document.getElementById("ganador").innerHTML =
              "<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>";
          }
        }
      }
    }
    if (jugada_usuario == "Papel") {
      if (jugada_maquina == 2) {
        document.getElementById("ganador").innerHTML =
          "<h1>¡Perdiste!</h1><h2>Usuario : Papel</h2><h2>Maquina : Tijera</h2><h3>Tijera le gana a papel.</h3>";
      } else {
        if (jugada_maquina == 0) {
          document.getElementById("ganador").innerHTML =
            "<h1>¡Ganaste!</h1><h2>Usuario : Papel</h2><h2>Maquina : Papel</h2><h3>Papel le gana a piedra .</h3>";
        } else {
          if (jugada_maquina == 1) {
            document.getElementById("ganador").innerHTML =
              "<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>";
          }
        }
      }
    }
    if (jugada_usuario == "Tijera") {
      if (jugada_maquina == 1) {
        document.getElementById("ganador").innerHTML =
          "<h1>¡Ganaste!</h1><h2>Usuario : Tijera</h2><h2>Maquina : Papel</h2><h3>Tijera le gana a papel.</h3>";
      } else {
        if (jugada_maquina == 0) {
          document.getElementById("ganador").innerHTML =
            "<h1>¡Perdiste!</h1><h2>Usuario : Tijera</h2><h2>Maquina : Piedra</h2><h3>Piedra le gana a tijera.</h3>";
        } else {
          if (jugada_maquina == 2) {
            document.getElementById("ganador").innerHTML =
              "<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>";
          }
        }
      }
    }
    //desplega resultado de la jugada
    document.getElementById("juego").style.display = "none";
    document.getElementById("ganador").style.display = "";
    document.getElementById("seguir").style.display = "";
  }
}
//sirve para hacer pausa controlada para seguir jugando
function seguir() {
  if (van_intentos < intentos) {
    document.getElementById("juego").style.display = "";
    document.getElementById("ganador").style.display = "none";
    document.getElementById("seguir").style.display = "none";
  } else {
    document.getElementById("juego").style.display = "none";
    document.getElementById("ganador").innerHTML =
      "<h1>¡Fin del Juego!</h1><h3>Superaste la cantidad de Intentos.</h3> <h3>Vuelve Pronto.</h3>";
    document.getElementById("seguir").style.display = "none";
  }
}
//oculta ganador
function desplegar_ganador() {
  document.getElementById("ganador").style.display = "none";
}
//si el usuario ingresa intentos mayor a 0, se abre el juego
if (intentos > 0) {
  document.getElementById("juego").style.display = "";
}
