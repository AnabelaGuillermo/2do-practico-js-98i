"Use strict";

/* Realiza un script que cuente el número de vocales que tiene un texto. */

let texto = prompt("Ingrese un texto.");
texto = texto.toLocaleLowerCase();
let vocales = 0;

for (let i = 0; i < texto.length; i++) {
  switch (texto[i]) {
    case "a":
    case "á":
    case "ä":
    case "e":
    case "é":
    case "ë":
    case "i":
    case "í":
    case "ï":
    case "o":
    case "ó":
    case "ö":
    case "u":
    case "ú":
    case "ü":
      vocales++;
      break;
    default:
      break;
  }
}

document.write("La cantidad de vocales es: " + vocales);
