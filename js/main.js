window.onload = function(){
    pantalla=document.getElementById("textoPantalla");
}
numeroenpantalla="0";
numerolisto=0;
primernumero=0;
operacion="no";
      
function numero(cadena) {
    if (numeroenpantalla=="0" || numerolisto==0  ) { 
        pantalla.innerHTML=cadena;
        numeroenpantalla=cadena;
    }
    else {
        pantalla.innerHTML+=cadena;
        numeroenpantalla+=cadena;
    }
    numerolisto=1
}

function operar(s) {
    resultado()
    primernumero=numeroenpantalla 
    operacion=s;
    numerolisto=0;
}	

function resultado() {
    if (operacion=="no") {
        pantalla.innerHTML=numeroenpantalla;	
    }
    else {
        solucionescrita=primernumero+operacion+numeroenpantalla;
        solucion=eval(solucionescrita)
        pantalla.innerHTML=solucion
        numeroenpantalla=solucion;
        operacion="no";
        numerolisto=0;
     }
}

function borradoTotal() {
         pantalla.innerHTML=0;
         numeroenpantalla="0";
         primernumero=0
         operacion="no"
         }