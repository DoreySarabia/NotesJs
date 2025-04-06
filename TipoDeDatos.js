
// 1. ¿Cómo declarar variables?
// En JavaScript, puedes declarar variables usando 'let', 'const' y 'var'.
// 'let' se usa cuando se planea que el valor de la variable pueda cambiar. 
// 'const' se usa cuando el valor de la variable no debe cambiar después de ser asignado.
// 'var' es una forma más antigua de declarar variables, pero aún se usa en algunos casos. Es preferible usar 'let' o 'const'.

let miEdad = 25;  // Declaramos una variable 'miEdad' usando 'let'
const pi = 3.14;  // Declaramos una constante 'pi' usando 'const' (no cambiará el valor)

// 2. ¿Qué es 'console.log()'?
// 'console.log()' es una función en JavaScript que muestra mensajes o resultados en la consola del navegador o en el terminal.
// Es útil para depurar tu código y verificar si las variables tienen el valor que esperas.

console.log(miEdad);  // Imprime: 25
console.log(pi);      // Imprime: 3.14



let nombre = "Juan";  // 'let' declara una variable cuyo valor puede cambiar
const edad = 25;      // 'const' declara una variable cuyo valor no puede cambiar
// var lugar = "Madrid"; // 'var' es una forma antigua de declarar variables

console.log(nombre);  // 'console.log' se utiliza para mostrar información en la consola del navegador o en el terminal. En este caso, imprime "Juan".
console.log(edad);    // 'console.log' también muestra el valor de la variable 'edad'

// Tipos de datos en JavaScript

// String (Cadena de texto)
// Un String es un tipo de dato que representa texto. Se puede escribir con comillas simples (' ') o dobles (" ").

let saludo = "Hola, Mundo!";
console.log(saludo);  // Imprime: "Hola, Mundo!" 

// Los Strings pueden contener letras, números, y caracteres especiales, pero se tratan como texto.
let mensaje = "El número de mi casa es 25.";
console.log(mensaje);  // Imprime: "El número de mi casa es 25."

// Number (Número)
// El tipo Number se utiliza para representar números enteros o decimales. En JavaScript, todos los números, sean enteros o flotantes (con decimales), son del tipo 'number'.

let edadPersona = 30;
let precioProducto = 19.99;
console.log(edadPersona);    // Imprime: 30
console.log(precioProducto); // Imprime: 19.99

// Boolean (Booleano)
// Un Boolean puede tener uno de dos valores: 'true' (verdadero) o 'false' (falso).
// Se usa comúnmente para representar decisiones o condiciones.

let esEstudiante = true;   // 'true' indica que la persona es estudiante
let esMayorDeEdad = false; // 'false' indica que la persona no es mayor de edad
console.log(esEstudiante); // Imprime: true
console.log(esMayorDeEdad); // Imprime: false

// Undefined (Indefinido)
// Una variable es 'undefined' cuando se ha declarado, pero no se le ha asignado un valor. Es como si estuviera vacía.

let producto;
console.log(producto);  // Imprime: undefined, porque no se ha asignado valor a la variable

// Null (Nulo)
// 'Null' es un valor especial que representa la ausencia intencional de un valor. Es como decir "no hay nada".

let usuario = null;
console.log(usuario);  // Imprime: null

// Object (Objeto)
// Un Objeto es un tipo de dato complejo que permite almacenar colecciones de datos relacionados. Un objeto puede contener propiedades (valores) y métodos (funciones).

let persona = {
    nombre: "Juan",       // Propiedad: nombre
    edad: 30,            // Propiedad: edad
    ciudad: "Madrid"     // Propiedad: ciudad
};

console.log(persona);  // Imprime el objeto: { nombre: "Juan", edad: 30, ciudad: "Madrid" }

// Array (Arreglo o lista)
// Un Array es una lista ordenada de valores. Los valores dentro de un Array pueden ser de cualquier tipo de dato.

let frutas = ["manzana", "banana", "cereza"];  // 'frutas' es un Array
console.log(frutas);  // Imprime: ["manzana", "banana", "cereza"]

// Los elementos dentro de un Array están indexados por números, comenzando desde 0.
console.log(frutas[0]);  // Imprime: "manzana" (el primer elemento del Array)

// Function (Función)
// Una función es un bloque de código que se ejecuta cuando se le llama. Las funciones permiten reutilizar código y hacer programas más organizados.

function saludar() {
    console.log("¡Hola! ¿Cómo estás?");
}

saludar();  // Llama a la función y muestra: ¡Hola! ¿Cómo estás?


//Tipos de datos
// - String: texto entre comillas 
// - Number: números 
// - Boolean: verdadero o falso 
// - Undefined: una variable que no tiene valor asignado
// - Null: ausencia intencional de valor
// - Object: colecciones de propiedades
// - Array: lista de valores
// - Function: bloque de código reutilizable