"Use strict"

/* Realiza un script que pida números hasta que se pulse “cancelar”.
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

let sumaDeNumeros = 0;

while (true) {
    let input = prompt("Ingresa tu número");
    
    if (input === null) {
        alert("La suma total de los números introducidos es: " + sumaDeNumeros);
        break;
    } 
    
    let numero = parseInt(input);
    
    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
    } else {
        sumaDeNumeros += numero;
    }
}

