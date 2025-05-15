const boton = document.querySelector("button")
const color = document.getElementById("color")

//Genetar color aleatorio
function colorAleatorio() {
    let digitos = "0123456789abcdef"
    let color = "#"

    for(let i=0;i<6;i++){
        let numero = Math.floor(Math.random() * 16) //Con floor me redondea el resultado en caso de que salga con punto decimal
        color += digitos[numero] //Se agraga un digito de la seuencia aleatoria
    }

    return color
}

boton.addEventListener("click", function(){
    let colorNuevo = colorAleatorio()
    //Actualizar el texto
    color.textContent = colorNuevo
    //Actualizar fondo
    document.body.style.backgroundColor = colorNuevo
})