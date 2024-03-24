"Use strict"

/* Escribir un programa que solicite una nota (número) de 0  a 10.
Luego mostrar la calificación en un alert según los siguientes rangos de nota: */

let nota = parseInt(prompt("Ingrese una nota del 0 al 10"));

if (isNaN(nota)) {
    alert("No es un número.");
} else if (nota < 0 || nota > 10) {
    alert("El número está fuera de rango.")
} else if (nota >= 0 && nota <=2) {
    alert("Muy deficiente")
} else if (nota > 2 && nota <=4) {
    alert("Insuficiente")
} else if (nota > 4 && nota <=6) {
    alert("Suficiente")
} else if (nota > 6 && nota <=7) {
    alert("Bien")
} else if (nota > 7 && nota <=9) {
    alert("Notable")
} else if (nota === 10) {
    alert("Sobresaliente")
}
