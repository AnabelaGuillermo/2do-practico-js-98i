"Use strict"

/* Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */

let cadenaDeTexto = '';

do {
    let texto = prompt("Ingresa tu texto");
    if (texto !== null) {
        cadenaDeTexto += texto + " - ";
    } else {
        if (cadenaDeTexto === '') {
            alert("No se escribió ningún texto.");
        }
    }
} while (confirm("¿Deseas ingresar otro texto?"));

cadenaDeTexto = cadenaDeTexto.slice(0, -3);

alert(`Tus textos fueron: ${cadenaDeTexto}`);


