/*//Defino el tablero
var tablero = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]
//Ingreso el auto en la posicion 3,5
tablero[3][5] = "A";

//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("tablero");

//Variables temporales
var fila, casilla;

//Recorro el arreglo para dibujar el tablero
for(var i = 0; i<tablero.length; i++){
  fila = document.createElement("div");
  fila.classList.add("fila");
  for(var j = 0; j<tablero[i].length; j++){
    casilla = document.createElement("div");
    casilla.innerHTML = tablero[i][j];
    casilla.classList.add("casilla")
    fila.appendChild(casilla);
  }
  divTablero.appendChild(fila);
}*/
function validate () {
        var inputs = document.getElementsById('num');
        var inputs_length = inputs.length-1;
        for (i=0; i<=inputs_length; i++) {
            var inputs_value = document.getElementsById('num')[i].value;
            if (inputs_value == "") {
                alert('there is empty, please enter your number');
            }
        }

    }   

    var el = document.getElementById('drive');

    if (el.addEventListener) {  
    el.addEventListener('click', validate, false); 
    } else if (el.attachEvent)  {  
      el.attachEvent('onclick', validate);  
    } 
