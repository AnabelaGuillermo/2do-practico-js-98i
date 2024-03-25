"Use strict"

/* Crea script para generar pirámide siguiente con los números del 1 al número
que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let num = parseInt(prompt("Ingrese un número (no mayor de 50):"));

if (num > 50) {
    alert("El número ingresado es mayor que 50. Por favor, ingrese un número válido.");
} else {
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(j);
        }
        document.write("<br/>");
    }
}
