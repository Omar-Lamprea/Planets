
window.addEventListener('load', initPlanet);
function initPlanet (){
    const weight = document.getElementById('peso');
    const marte = document.getElementById('marte');
    const jupiter= document.getElementById('jupiter');
    const result = document.getElementById('result');
    const g_tierra = 9.8;
    const g_marte = 3.7;
    const g_jupiter = 24.8;
    let peso_final;
    let planet;

    function martee(){
        peso_final = weight.value * g_marte / g_tierra;
        result.innerHTML = '<strong>Tu peso en Marte es ' + peso_final.toFixed(2) + ' kilos!</strong>'
    }
    function jupiterr(){
        peso_final = weight.value * g_jupiter / g_tierra;
        result.innerHTML = '<strong>Tu peso en Jupiter es ' + peso_final.toFixed(2) + ' kilos!</strong>'
    }

marte.addEventListener('click', martee)
jupiter.addEventListener('click', jupiterr)

}



     /*   const usuario = prompt("Cuál es tu peso");
        const planeta = parseInt(prompt("Elige tu planeta.\n 1 es Marte, 2 es Jupiter"));
        const peso = parseFloat(usuario);
        const g_tierra = 9.8;
        const g_marte = 3.7;
        const g_jupiter = 24.8;
        let peso_final;
        if(planeta == 1){
        peso_final = peso * g_marte / g_tierra;
        document.write('tu peso en Marte es <strong>' + peso_final.toFixed(2) + ' kilos</strong>')
        }
        else if(planeta == 2){
        peso_final = peso * g_jupiter / g_tierra;
        document.write('tu peso en Jupiter es <strong>' + peso_final.toFixed(2) + ' kilos</strong>')
        // peso_final = (peso_final.toFixed(2));
        }
        else{
        peso_final = 100000000000;
        document.write('tu peso en peso en Fondo de Bikini es <strong>' + peso_final.toFixed(2) + ' kilos</strong>')
        }
*/
        
    // peso_final = (peso_final.toFixed(2));
    // parseInt= quitar decimales y convertir string a numero
    // parseFloat= convierte el string en numero flotante (con decimales)