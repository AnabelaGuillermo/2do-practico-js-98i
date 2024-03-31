"Use strict"

/* Ejercicio con String:
Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter
sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”,
deberá salir “h-o-l-a- -q-u-e- -t-a-l”. */

let cadena = prompt("Escribe un texto.");
let resultado = '';

for(let i = 0; i < cadena.length; i++) {
    if(i !== 0) {
        resultado += "-";
    }
    resultado += cadena.charAt(i);
}

document.write(resultado);