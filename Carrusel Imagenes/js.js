let imagenes = [
{
        "url": "https://marketplace.canva.com/EAFzIrT_NdY/1/0/1600w/canva-colorful-minimalist-space-desktop-wallpaper-a3B7oPWJLWo.jpg",
        "nombre": "Imagen Carrusel 1",
        "descripcion": "Esto debería de ser una descripción de la imagen"
    },
    {
        "url": "https://i.redd.it/d2hd73xxwvaa1.jpg",
        "nombre": "Imagen Carrusel 2",
        "descripcion": "Esto debería de ser una descripción de la imagen, supongo"

    },
    {
        "url": "https://img.freepik.com/vector-gratis/noche-oceano-paisaje-luna-llena-estrellas-brillan_107791-7397.jpg?semt=ais_hybrid&w=740",
        "nombre": "Imagen Carrusel 3",
        "descripcion": "Esto debería de ser una descripción de la imagen, supongo... o quizas no"

    },
]


let atras = document.getElementById('atrasDos');
let adelante = document.getElementById('adelanteDos');
let imagen = document.getElementById('imagenDos');
let puntos = document.getElementById('puntosDos');
let texto = document.getElementById('textoDos')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1
    if(actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = `<img class="imagenDos" src="${imagenes[actual].url}" alt="Imagen" loading="lazy"></img>`
    texto.innerHTML = `<h3>${imagenes[actual].nombre}</h3>
                        <p>${imagenes[actual].descripcion}</p>`
posicionCarrusel()
})

adelante.addEventListener('click', function(){
    actual +=1
    if(actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = `<img class="imagenDos" src="${imagenes[actual].url}" alt="Imagen" loading="lazy"></img>`
    texto.innerHTML = `<h3>${imagenes[actual].nombre}</h3>
                        <p>${imagenes[actual].descripcion}</p>`
posicionCarrusel()
})

function posicionCarrusel() {
    puntos.innerHTML = "" //Se elimina el contenido para que no se duplique la información
    for(let i=0; i<imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.</p>'
        }
        else{
            puntos.innerHTML += '<p>.</p>'
        }
    }
}

/*Carrusel Tres
----------------------------------------------------------------------------*/

let currentSlide = 0;
const slides = document.querySelectorAll('.carrusel-item');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    document.querySelector('.carrusel-inner').style.transform = `translateX(-${currentSlide * 100}%)`;

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

function adelanteTres() {
    showSlide(currentSlide + 1);
}

function atrasTres() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
}

// Avanza cada 3 segundos
setInterval(adelanteTres, 3000);
