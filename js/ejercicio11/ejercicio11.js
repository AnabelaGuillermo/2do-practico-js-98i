"Use strict";

/* Ejercicio con Math:
Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. */

let nombre1 = prompt("Ingrese el nombre de la primera persona:");
let edad1;
do {
  edad1 = prompt("Ingrese la edad de " + nombre1 + ":");
  edad1 = parseInt(edad1);
} while (isNaN(edad1));

let nombre2 = prompt("Ingrese el nombre de la segunda persona:");
let edad2;
do {
  edad2 = prompt("Ingrese la edad de " + nombre2 + ":");
  edad2 = parseInt(edad2);
} while (isNaN(edad2));

let nombre3 = prompt("Ingrese el nombre de la tercera persona:");
let edad3;
do {
  edad3 = prompt("Ingrese la edad de " + nombre3 + ":");
  edad3 = parseInt(edad3);
} while (isNaN(edad3));

let mayorEdad = Math.max(edad1, edad2, edad3);
let nombreMayor;
if (mayorEdad === edad1) {
  nombreMayor = nombre1;
} else if (mayorEdad === edad2) {
  nombreMayor = nombre2;
} else {
  nombreMayor = nombre3;
}

alert("La persona mayor es: " + nombreMayor);
