// =====================================================
// Declaración de una función básica:

// Aquí estamos declarando una función llamada 'saludar', que no recibe parámetros y solo imprime un mensaje.
function saludar() {
    console.log("¡Hola, mundo!");  // Imprime: ¡Hola, mundo!
}

// Llamamos a la función 'saludar' para que ejecute el código.
saludar();

// =====================================================
// Funciones con parámetros:

// Podemos declarar funciones que aceptan parámetros. Estos son valores que la función necesita para funcionar.
function saludarPersona(nombre) {
    console.log("¡Hola, " + nombre + "!");  // Imprime un saludo personalizado con el nombre.
}

// Llamamos a la función 'saludarPersona' pasando un valor para el parámetro 'nombre'.
saludarPersona("Juan");  // Imprime: ¡Hola, Juan!
saludarPersona("Ana");   // Imprime: ¡Hola, Ana!

// =====================================================
// Funciones con valor de retorno:

// Una función también puede devolver un valor, lo que significa que nos da un resultado después de ejecutar el código.
function sumar(a, b) {
    return a + b;  // Devuelve la suma de los dos números.
}

// Llamamos a la función 'sumar' y almacenamos el resultado en una variable.
let resultado = sumar(5, 3);  // Llama a la función con los valores 5 y 3, y retorna 8.
console.log(resultado);  // Imprime: 8

// =====================================================
// Funciones con múltiples parámetros:

// Las funciones pueden tener más de un parámetro.
function multiplicar(a, b, c) {
    return a * b * c;  // Devuelve el resultado de multiplicar los tres números.
}

let resultadoMultiplicacion = multiplicar(2, 3, 4);  // Llama a la función con 2, 3 y 4.
console.log(resultadoMultiplicacion);  // Imprime: 24

// =====================================================
// Funciones anónimas (Funciones sin nombre):

// Las funciones anónimas son funciones que no tienen un nombre y se utilizan comúnmente en eventos o funciones de orden superior.
let saludo = function() {
    console.log("¡Hola desde una función anónima!");  // Imprime: ¡Hola desde una función anónima!
};

// Llamamos a la función anónima.
saludo();

// =====================================================
//  Funciones de flecha (Arrow Functions):

// Las funciones de flecha son una forma más compacta de escribir funciones en JavaScript.
// Son especialmente útiles cuando tenemos funciones simples.
const sumarFlecha = (a, b) => a + b;  // Función de flecha que suma dos números.

let resultadoFlecha = sumarFlecha(10, 5);  // Llama a la función de flecha con 10 y 5.
console.log(resultadoFlecha);  // Imprime: 15

// =====================================================
//Funciones que retornan otra función:

// Las funciones pueden retornar otras funciones, lo que se conoce como "funciones de orden superior".
function crearSaludo(saludo) {
    return function(nombre) {
        console.log(saludo + ", " + nombre);  // Saluda con el saludo proporcionado.
    }
}

// Llamamos a 'crearSaludo' para crear una nueva función con un saludo personalizado.
let saludoPersonalizado = crearSaludo("¡Buenos días");

// Llamamos a la función que fue devuelta por 'crearSaludo'.
saludoPersonalizado("Carlos");  // Imprime: ¡Buenos días, Carlos!
saludoPersonalizado("Ana");     // Imprime: ¡Buenos días, Ana!

// =====================================================
// Funciones con valores por defecto:

// En JavaScript, podemos asignar valores por defecto a los parámetros de las funciones. Si no se pasa un valor, se usa el valor por defecto.
function saludarConNombre(nombre = "Visitante") {
    console.log("¡Hola, " + nombre + "!");  // Si no se pasa un nombre, usa "Visitante".
}

// Llamamos a la función pasando un valor para el parámetro 'nombre'.
saludarConNombre("Juan");  // Imprime: ¡Hola, Juan!

// Llamamos a la función sin pasar ningún valor, por lo que usa el valor por defecto.
saludarConNombre();  // Imprime: ¡Hola, Visitante!

// =====================================================
//Funciones recursivas:

// Una función recursiva es aquella que se llama a sí misma. Es útil para resolver problemas donde el mismo problema debe resolverse repetidamente.
function factorial(n) {
    if (n === 0) {
        return 1;  // Caso base: el factorial de 0 es 1.
    } else {
        return n * factorial(n - 1);  // Llama a la misma función con un valor menor.
    }
}

// Calculamos el factorial de 5.
let resultadoFactorial = factorial(5);  // 5! = 5 * 4 * 3 * 2 * 1 = 120
console.log(resultadoFactorial);  // Imprime: 120

// =====================================================
// Funciones como argumentos:

// Las funciones también pueden ser pasadas como argumentos a otras funciones.
function aplicarOperacion(a, b, operacion) {
    return operacion(a, b);  // Llama a la función pasada como argumento.
}

let resultadoOperacion = aplicarOperacion(4, 2, sumarFlecha);  // Pasa la función 'sumarFlecha' como argumento.
console.log(resultadoOperacion);  // Imprime: 6
