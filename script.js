// Ejercicio 1

/*Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.*/

function numerosAleatorios() {
    numeros = [];
    for (let index = 0; index < 10; index++) {
        numeros.push(Math.floor(Math.random() * 10));
    }
    return("Los 10 números son: [" + numeros + "]");
}

function ejercicio1() {
    let salida = document.getElementById("resultado1");
    let resultado = numerosAleatorios();
    salida.innerHTML = "";
    salida.innerHTML = resultado;
}

// Ejercicio 2

/*El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado*/

function ejercicio2() {
    let input = document.getElementById("input2").value;
    let resultado = input.split(",");
    salida = document.getElementById("resultado2");
    salida.innerHTML = "";
    salida.innerHTML = `[${resultado}]`;
}


// Ejercicio 3

/*De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google
los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.*/

function ejercicio3() {
    minMax = [];
    let arreglo = [10,40,30,20,15,5];
    arreglo.sort(function(a, b) {
        return a - b;
    });
    let salida = document.getElementById("resultado3");
    salida.innerHTML = "";
    let resultado = `El arreglo ordenado es: ${arreglo}, El número menor es: ${arreglo[0]}, El número mayor es: ${arreglo[arreglo.length-1]}`
    salida.innerHTML = resultado;
}
