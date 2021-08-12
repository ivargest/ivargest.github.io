/* ======================================================================================================================================================= */
        // LOGIN //
/* ======================================================================================================================================================= */


/* ======================================================================================================================================================= */
        // EJERCICIO1 //
/* ======================================================================================================================================================= */
 
    ejerciciouno = document.querySelector(".primerejercicio");
    ejerciciouno.innerHTML = "<input id='marcadelcoche' type='text' placeholder='Que marca de coche buscas?' value=''><input id='modelodelcoche' type='text' placeholder='Que modelo estas buscando?' value=''><button id='buscarCoche'>Buscar</button>";

    var coches = [
        ["Opel", ["Astra", "Corsa", "Insignia"]],
        ["Renault", ["Megane", "Clio", "Laguna"]],
        ["Seat", ["Panda", "Leon", "Ibiza"]]
    ];

    var buscarCoche = document.querySelector("#buscarCoche");
    
    buscarCoche.addEventListener("click", function() {
        var marcaBuscada = document.querySelector("#marcadelcoche").value;
        var modeloBuscado = document.querySelector("#modelodelcoche").value;
        marcaBuscada = marcaBuscada.toLowerCase();
        modeloBuscado = modeloBuscado.toLowerCase();

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
          
        marcaBuscada = (capitalizeFirstLetter(marcaBuscada));
        modeloBuscado = (capitalizeFirstLetter(modeloBuscado));

        ejerciciouno.innerHTML = "<input id='marcadelcoche' type='text' readonly='' value='" + marcaBuscada + "'><input id='modelodelcoche' type='text' readonly='' value='" + modeloBuscado + "'><button readonly='' id='buscarCoche'>Busqueda Completada</button>";

        if ((marcaBuscada == coches[0][0] && (modeloBuscado == coches[0][1][0] || modeloBuscado == coches[0][1][1] || modeloBuscado == coches[0][1][2])) || (marcaBuscada == coches[1][0] && (modeloBuscado == coches[1][1][0] || modeloBuscado == coches[1][1][1] || modeloBuscado == coches[1][1][2])) || (marcaBuscada == coches[2][0] && (modeloBuscado == coches[2][1][0] || modeloBuscado == coches[2][1][1] || modeloBuscado == coches[2][1][2]))) {
            ejerciciouno.innerHTML += "<input class='resultadoCoches' type='text' readonly='' value='Tenemos su " + marcaBuscada + " " + modeloBuscado + "'>";
        }else{
            ejerciciouno.innerHTML += "<input class='resultadoCoches' type='text' readonly='' value='No tenemos ese coche'></input>";
        }
    });

/* ======================================================================================================================================================= */
        // EJERCICIO2 //
/* ======================================================================================================================================================= */
 
    ejerciciodos = document.querySelector(".segundoejercicio");
    
    var contadorcasillas = 1; 
    while (contadorcasillas <= 64) {
        if (
                (contadorcasillas%2 == 0 && 
                    (contadorcasillas < 9 || 
                        (contadorcasillas > 16 && contadorcasillas < 25) || 
                        (contadorcasillas > 32 && contadorcasillas < 41) || 
                        (contadorcasillas > 48 && contadorcasillas < 57) || 
                        (contadorcasillas > 64 && contadorcasillas < 73)
                    )
                )
                ||
                (contadorcasillas%2 != 0 && 
                    (
                        (contadorcasillas > 8 && contadorcasillas < 17) || 
                        (contadorcasillas > 24 && contadorcasillas < 33) || 
                        (contadorcasillas > 40 && contadorcasillas < 49) || 
                        (contadorcasillas > 56 && contadorcasillas < 65)
                    )
                )
        ) {
            ejerciciodos.innerHTML += "<div class='casilla casillasblancas' id='casilla" + contadorcasillas + "' onclick='colocarficha("+contadorcasillas+")'></div>";
        }else{
            ejerciciodos.innerHTML += "<div class='casilla casillasnegras' id='casilla" + contadorcasillas + "' onclick='colocarficha("+contadorcasillas+")'></div>";
        };
        contadorcasillas++;
    };

    var casillasSeleccionadas = 0;

    function colocarficha(fichamarcada){
        if (casillasSeleccionadas<8) {
                document.querySelector("#casilla"+fichamarcada).innerHTML = "<img class='ficha' src='assets/rsc/img/chipcasilla.svg' alt='ERROR'>";
            casillasSeleccionadas++;
        }
    }
    
/* ======================================================================================================================================================= */
        // EJERCICIO3 //
/* ======================================================================================================================================================= */
   
ejerciciotres = document.querySelector(".tercerejercicio");

ejerciciotres.innerHTML = '<div class="espaciocartas"></div><button id="generarCarta">Generar Carta</button>'

var botonCarta = document.querySelector("#generarCarta");
var contadorCartas = 0;

botonCarta.addEventListener("click", function() {

    if (contadorCartas < 4) {
        var numeroCarta = generarNumeroCarta();
        var paloCarta = generarPaloCarta();
        contadorCartas++;
        document.querySelector(".espaciocartas").innerHTML += '<div class="imprimirCarta'+paloCarta+'"><div class="'+paloCarta+'arriba">'+numeroCarta+'</div><div class="'+paloCarta+'"></div><div class="'+paloCarta+'abajo">'+numeroCarta+'</div></div>'
    }

});

function generarNumeroCarta(numerodelacarta) {
    numerodelacarta = Math.floor((Math.random()*13)+1);
        if(numerodelacarta == 1) {
            return "A";
        } else if (numerodelacarta == 11) {
            return "J";
        } else if (numerodelacarta == 12) {
            return "Q";
        } else if (numerodelacarta == 13) {
            return "K";
        } else {
            return numerodelacarta;
        }
}

function generarPaloCarta(palodelacarta) {
    palodelacarta = Math.floor((Math.random()*4)+1);
        if(palodelacarta == 1) {
            return "corazones";
        } else if (palodelacarta == 2) {
            return "treboles";
        } else if (palodelacarta == 3) {
            return "picas";
        } else {
            return "diamantes";
        }
}
