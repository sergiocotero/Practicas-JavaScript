let display = document.getElementById("display");

function agregar(valor) {
  display.value += valor;
}

function calcular() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function borrar() {
  display.value = "";
}