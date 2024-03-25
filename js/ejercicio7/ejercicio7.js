"Use strict"

/* Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let num = parseInt(prompt("Ingrese un número (no mayor de 50):"));

if (num > 50) {
    alert("El número ingresado es mayor que 50. Por favor, ingrese un número válido.");
} else {
    let resultado = "";
    for (let i = num; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            resultado += i;
        }
        resultado += "<br/>";
    }
    document.write(resultado);
}
