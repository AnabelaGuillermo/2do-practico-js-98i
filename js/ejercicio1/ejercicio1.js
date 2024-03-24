"Use strict"

/* 1- Escribir un programa que solicite la edad
y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
si la edad ingresada no es un número válido indicarlo en un mensaje. */

let edad = parseInt(prompt("Ingrese su edad"));

if (isNaN(edad) || edad <= 0 || edad >= 100) {
    alert("No es un número válido.");
} else if (edad >= 18) {
    alert("Puedes conducir.");
} else {
    alert("No puedes conducir.");
}
