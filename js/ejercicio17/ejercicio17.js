"Use strict";

/* Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1
*/

let texto = prompt("Introduce un texto:");
let vocales = "aeiouAEIOUáéíóúüÁÉÍÓÚÜäëïöüÄËÏÖÜÀàÈèÌìÒòÙùÂâÊêÎîÔôÛû";
let posicionVocal = -1;

for (let i = 0; i < texto.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (texto.charAt(i) === vocales.charAt(j)) {
      posicionVocal = i + 1;
      break;
    }
  }
  if (posicionVocal !== -1) {
    break;
  }
}

if (posicionVocal !== -1) {
  alert(
    "La vocal '" +
      texto.charAt(posicionVocal - 1) +
      "' está en la posición " +
      posicionVocal
  );
} else {
  alert("No se encontraron vocales en el texto introducido.");
}
