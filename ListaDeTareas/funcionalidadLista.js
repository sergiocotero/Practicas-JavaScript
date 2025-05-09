
document.getElementById("nuevaTarea").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        agregarTarea();
    }
});

function agregarTarea(){
    let nuevaTarea = document.getElementById("nuevaTarea").value

    //Validamos que no este vacío el texto ingresado
    if(nuevaTarea == ""){
        alert("Debe de agregar una tarea")
        return
    }

    //Creo un nuevo elemento en mi lista
    let tarea = document.createElement("li")
    tarea.textContent = nuevaTarea

    let botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar"
    botonEliminar.onclick = function(){ tarea.remove() }

    //Vincula el botón eliminar con el nuevo elemento
    tarea.appendChild(botonEliminar)

    //Agrega el elemento
    document.getElementById("listaTarea").appendChild(tarea)

    //Vacía el input
    document.getElementById("nuevaTarea").value = ""
}