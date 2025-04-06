// Condiciones
//Las condiciones permiten ejecutar ciertas partes del código solo cuando se cumplen ciertas
// condiciones, usando estructuras como `if`, `else if`, y `else`.
//

// if: Permite ejecutar un bloque de código solo si una condición es verdadera.

let edad = 20;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// else if: Se utiliza para añadir más condiciones a una estructura `if`.
let dia = "lunes";

if (dia === "lunes") {
  console.log("Hoy es lunes");
} else if (dia === "martes") {
  console.log("Hoy es martes");
} else {
  console.log("No es lunes ni martes");
}

// else: Es el bloque de código que se ejecuta si ninguna de las condiciones anteriores se cumple.
let hora = 8;

if (hora < 12) {
  console.log("Buenos días");
} else {
  console.log("Buenas tardes");
}

// switch: Es otra estructura condicional, más útil cuando tenemos varias condiciones posibles.
let color = "rojo";

switch (color) {
  case "rojo":
    console.log("El color es rojo");
    break;
  case "azul":
    console.log("El color es azul");
    break;
  case "verde":
    console.log("El color es verde");
    break;
  default:
    console.log("Color no reconocido");
    break;
}

// =====================================================
// Ciclos (Loops)
// Los ciclos (también llamados loops) nos permiten ejecutar un bloque de código repetidamente
//bajo ciertas condiciones.


// for: El ciclo `for` se utiliza cuando sabemos cuántas veces queremos que se repita una acción.
for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);  // Imprime del 0 al 4
}

// while: El ciclo `while` ejecuta un bloque de código mientras una condición sea verdadera.
let contador = 0;
while (contador < 5) {
  console.log("Contador: " + contador);  // Imprime del 0 al 4
  contador++;  // Asegúrate de cambiar la condición para evitar un ciclo infinito
}

// do while: Similar al `while`, pero ejecuta el bloque de código al menos una vez, incluso si la condición es falsa al inicio.
let intento = 0;
do {
  console.log("Intento número: " + intento);  // Imprime al menos una vez
  intento++;
} while (intento < 5);

// for...of: Este ciclo se utiliza para iterar sobre los elementos de un objeto iterable como un array.
let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
  console.log(numero);  // Imprime los valores del array
}

// for...in: Este ciclo se utiliza para iterar sobre las propiedades de un objeto.
let persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);  // Imprime las claves y valores del objeto
}

// =====================================================
// Control de flujo con break y continue
//break permite salir inmediatamente de un ciclo, mientras que continue hace que el ciclo
//pase a la siguiente iteración, saltándose el resto del código dentro del ciclo.



// break: Rompe el ciclo y sale de él.

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;  // Sale del ciclo cuando i es igual a 5
  }
  console.log(i);  // Imprime: 0, 1, 2, 3, 4
}

// continue: Pasa a la siguiente iteración del ciclo, saltándose el código que sigue en esa iteración.

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;  // Salta la iteración cuando i es igual a 2
  }
  console.log(i);  // Imprime: 0, 1, 3, 4
}


