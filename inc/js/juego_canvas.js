var lienzo = null,
    canvas = null;
var x = 50,
    y = 50;
var lastPress = null; //Variable para guardar la tecla presionada
//En nuestro juego, usaremos las teclas izquierda, arriba, derecha y abajo, cuyos valores numéricos son 37, 38, 39 y 40 respectivamente.
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_P = 80;
var pause = false;
var continuar = null;


function iniciar() {
    canvas = document.getElementById('lienzo2');
    lienzo = canvas.getContext('2d'); //obtenemos el contexto de dibujo
    run();
}

function run() {
    //requestAnimationFrame(): informa al navegador de que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación.
    requestAnimationFrame(run); //animación optimizada
    accionesJuego();
    pintarLienzo(lienzo);
}

function accionesJuego() {

    if (lastPress == KEY_P) {
        if (pause == true) {

            pause = false;
            lastPress = continuar;
        } else {
            pause = true;
        }
        lastPress = null;
    }

    if (!pause) {



        if (lastPress == KEY_RIGHT) {
            x += 5;
            continuar = KEY_RIGHT
        }
        if (lastPress == KEY_LEFT) {
            x -= 5;
            continuar = KEY_LEFT
        }
        if (lastPress == KEY_UP) {
            y -= 5;
            continuar = KEY_UP
        }
        if (lastPress == KEY_DOWN) {
            y += 5;
            continuar = KEY_DOWN
        }

        if (x >= canvas.width) x = 0;
        if (x < 0) x = 300;
        if (y >= canvas.height) y = 0;
        if (y < 0) y = 300;
    }
}

function pintarLienzo(lienzo) {
    lienzo.fillStyle = "lightgray"; //le ponemos un color al lienzo
    lienzo.fillRect(0, 0, canvas.width, canvas.height); //Dibujamos el lienzo
    lienzo.fillStyle = '#0f0';
    lienzo.fillRect(x, y, 10, 10); //Dibujamos el jugador: va por posición x,y y es de 10x10
    if (pause) {
        lienzo.fillStyle = 'RED';
        lienzo.font = 'bold 20px Milonga';
        lienzo.textAlign = 'center';
        lienzo.fillText('JUEGO EN PAUSA', 150, 75);
        lienzo.font = '1em Milonga';
        lienzo.fillText('(Para continuar pulse la tecla P)', 150, 110);
    }
}

document.addEventListener('keydown', function(evt) {
    //Creamos un manejador de evento para el teclado que se encargue de almacenar la tecla presionada. El evento que nos interesa en este caso es keydown
    lastPress = evt.keyCode;
}, false);


window.addEventListener("load", iniciar, false);