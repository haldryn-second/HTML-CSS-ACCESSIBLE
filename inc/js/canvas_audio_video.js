var ctx = null;
var canvas = null;

function accionPlay() {
    if (!medio.paused && !medio.ended) {
        medio.pause();
        play.value = '\u25BA'; //\u25BA
        document.body.style.backgroundColor = '#fff';
    } else {
        medio.play();
        play.value = '||';
        document.body.style.backgroundColor = 'grey';
    }
}

function accionReiniciar() {
    medio.pause();
    medio.currentTime = 0;
    play.value = '\u25BA';
}

function accionRetrasar() {
    medio.currentTime = medio.currentTime - 5;
}

function accionAdelantar() {
    medio.currentTime = medio.currentTime + 5;
}

function accionSilenciar() {
    if (medio.muted == true) {
        medio.muted = false;
        document.getElementById('volumen_rango').classList.remove("muted")

    } else {
        medio.muted = true;
        document.getElementById('volumen_rango').classList.add("muted")
    }
}

function accionMasVolumen() {
    medio.volume = medio.volume + 0.1;
    document.getElementById('volumen_rango').value = parseInt(medio.volume * 10);
}

function accionMenosVolumen() {
    medio.volume = medio.volume - 0.1;
    document.getElementById('volumen_rango').value = parseInt(medio.volume * 10);
}

function cambiarVolumen() {
    vol = document.getElementById('volumen_rango').value;
    var vol_rango = parseFloat(vol);
    vol_rango = (vol_rango / 10);
    medio.volume = vol_rango;
}

function accionPlay_audio(valor) {
    var reproducir = new Audio();
    switch (valor) {
        case 1:
            reproducir.src = "inc/mp3/334515__sruelas__mixer.wav";
            break;
        case 2:
            reproducir.src = "inc/mp3/336518__giddster__kitchen-faucet.wav";
            break;
        case 3:
            reproducir.src = "inc/mp3/415892__selector__pilaf-is-boiling-in-cauldron-2.wav";
            break;
        case 4:
            reproducir.src = "inc/mp3/458048__quetzalcontla__kitchen-dishes-2.wav";
            break;
    }
    reproducir.play();
}


function iniciar() {

    var slider = document.getElementById('myRange')
    medio = document.getElementById('medio');
    play = document.getElementById('play');
    reiniciar = document.getElementById('reiniciar');
    retrasar = document.getElementById('retrasar');
    adelantar = document.getElementById('adelantar');
    silenciar = document.getElementById('silenciar');


    document.getElementById('volumen_rango').value = parseInt(medio.volume * 10);

    play.addEventListener('click', accionPlay);
    reiniciar.addEventListener('click', accionReiniciar);
    retrasar.addEventListener('click', accionRetrasar);
    adelantar.addEventListener('click', accionAdelantar);
    silenciar.addEventListener('click', accionSilenciar);
    menosVolumen.addEventListener('click', accionMenosVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);
    volumen_rango.addEventListener('change', cambiarVolumen);

    audio1.addEventListener("click", function() {
        accionPlay_audio(1);
    }, false);
    audio2.addEventListener("click", function() {
        accionPlay_audio(2);
    }, false);
    audio3.addEventListener("click", function() {
        accionPlay_audio(3);
    }, false);
    audio4.addEventListener("click", function() {
        accionPlay_audio(4);
    }, false);

    canvas1 = document.getElementById('lienzo');
    ctx = canvas1.getContext('2d');

    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(250,0,0,0.1)";
    ctx.strokeRect(10, 20, 60, 150);
    ctx.strokeStyle = "rgba(250,0,0,0.2)";
    ctx.strokeRect(20, 30, 60, 150);
    ctx.strokeStyle = "rgba(250,0,0,0.3)";
    ctx.strokeRect(30, 40, 60, 150);
    ctx.strokeStyle = "rgba(250,0,0,0.4)";
    ctx.strokeRect(40, 50, 60, 150);
    ctx.strokeStyle = "rgba(250,0,0,0.5)";
    ctx.strokeRect(50, 60, 60, 150);
    ctx.strokeStyle = "rgba(250,0,0,0.6)";
    ctx.strokeRect(60, 70, 60, 150);
    ctx.strokeStyle = "rgba(250,0,0,0.7)";
    ctx.strokeRect(70, 80, 60, 150);
    ctx.strokeStyle = "rgba(250,0,0,0.8)";
    ctx.strokeRect(80, 90, 60, 150);
    ctx.strokeStyle = "rgba(250,0,0,0.9)";
    ctx.strokeRect(90, 100, 60, 150);
    ctx.strokeStyle = "rgba(250,0,0,1)";
    ctx.strokeRect(100, 110, 60, 150);

    ctx.beginPath();
    ctx.arc(150, 170, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(150,0,150,1)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(160, 160, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(150,0,150,0.9)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(170, 150, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(150,0,150,0.8)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(180, 140, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(150,0,150,0.7)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(190, 130, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(150,0,150,0.6)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(200, 120, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(150,0,150,0.5)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(210, 110, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(150,0,150,0.4)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(220, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(150,0,150,0.3)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(230, 90, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(150,0,150,0.2)";
    ctx.stroke();
    ctx.arc(240, 80, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(150,0,150,0.1)";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(300, 300);

    ctx.lineWidth = 1;
    ctx.strokeStyle = "#797979";
    ctx.stroke();


    ctx.font = 'bold 20px Milonga';
    ctx.textAlign = "left";

    ctx.fillText('O', 50, 350);
    ctx.fillText('I', 70, 370);
    ctx.fillText('D', 90, 350);
    ctx.fillText('O', 110, 370);
    ctx.fillText('C', 130, 350);
    ctx.fillText('O', 150, 370);
    ctx.fillText('C', 170, 350);
    ctx.fillText('I', 190, 370);
    ctx.fillText('N', 210, 350);
    ctx.fillText('A', 230, 370);

    var img = new Image();
    img.src = 'inc/img/logo_isotipo.png';
    img.onload = function() {
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 3;
        ctx.shadowColor = "#8FED89";
        ctx.drawImage(img, 40, 400);
    };
}

window.addEventListener('load', iniciar, false);