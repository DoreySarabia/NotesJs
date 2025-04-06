// Los operadores son símbolos que permiten realizar operaciones sobre valores o variables en JavaScript.
// Los principales tipos de operadores son los siguientes:


// =====================================================
// Operadores Aritméticos
// (para realizar cálculos matemáticos)
// =====================================================


// + (Suma): Suma dos valores.
let a = 10;
let b = 5;
let resultado = a + b;  // Suma 10 + 5
console.log(resultado);  // Imprime: 15

// - (Resta): Resta el segundo valor al primero.
resultado = a - b;  // Resta 10 - 5
console.log(resultado);  // Imprime: 5

// * (Multiplicación): Multiplica dos valores.
resultado = a * b;  // Multiplica 10 * 5
console.log(resultado);  // Imprime: 50

// / (División): Divide el primer valor entre el segundo.
resultado = a / b;  // Divide 10 / 2
console.log(resultado);  // Imprime: 2

// % (Módulo): Devuelve el resto de la división entre dos números.
resultado = a % b;  // Devuelve el resto de 10 / 3
console.log(resultado);  // Imprime: 0

// ++ (Incremento): Aumenta el valor de una variable en 1.
a++;
console.log(a);  // Imprime: 11

// -- (Decremento): Disminuye el valor de una variable en 1.
a--;
console.log(a);  // Imprime: 10




// =====================================================
// Operadores de Asignación (para asignar valores a las variables)
// =====================================================


// = (Asignación simple): Asigna un valor a una variable.
let x = 5;
console.log(x);  // Imprime: 5

// += (Asignación de suma): Suma el valor de una variable a otra y luego lo asigna.
x += 3;  // Equivalente a: x = x + 3
console.log(x);  // Imprime: 8

// -= (Asignación de resta): Resta el valor de una variable a otra y luego lo asigna.
x -= 2;  // Equivalente a: x = x - 2
console.log(x);  // Imprime: 6

// *= (Asignación de multiplicación): Multiplica el valor de una variable por otro y luego lo asigna.
x *= 2;  // Equivalente a: x = x * 2
console.log(x);  // Imprime: 12

// /= (Asignación de división): Divide el valor de una variable entre otro y luego lo asigna.
x /= 3;  // Equivalente a: x = x / 3
console.log(x);  // Imprime: 4

// %= (Asignación de módulo): Aplica el operador módulo y luego asigna el resultado.
x %= 3;  // Equivalente a: x = x % 3
console.log(x);  // Imprime: 1


// =====================================================
// Operadores de Comparación (para comparar valores)
// =====================================================


// == (Igualdad): Compara si dos valores son iguales, sin tener en cuenta el tipo de dato.
let y = "5";
console.log(x == y);  // Imprime: true (ya que su valor es igual aunque los tipos son diferentes)

// === (Identidad estricta): Compara si dos valores son exactamente iguales (mismo valor y tipo de dato).
console.log(x === y);  // Imprime: false (porque x es número y y es string)

// != (Desigualdad): Compara si dos valores no son iguales, sin tener en cuenta el tipo de dato.
console.log(x != y);  // Imprime: false (porque sus valores son iguales)

// !== (Desigualdad estricta): Compara si dos valores no son exactamente iguales.
console.log(x !== y);  // Imprime: true (porque sus tipos son diferentes)

// > (Mayor que): Compara si el primer valor es mayor que el segundo.
console.log(x > 3);  // Imprime: true

// < (Menor que): Compara si el primer valor es menor que el segundo.
console.log(x < 10);  // Imprime: true

// >= (Mayor o igual que): Compara si el primer valor es mayor o igual al segundo.
console.log(x >= 4);  // Imprime: true

// <= (Menor o igual que): Compara si el primer valor es menor o igual al segundo.
console.log(x <= 5);  // Imprime: true

// =====================================================
//Operadores Lógicos 
//(para realizar operaciones lógicas entre condiciones)
// =====================================================

// && (Y lógico): Devuelve true solo si ambas condiciones son verdaderas.
let a1 = true;
let b1 = false;
console.log(a1 && b1);  // Imprime: false (ambas condiciones no son verdaderas)

//  || (O lógico): Devuelve true si al menos una de las condiciones es verdadera.
console.log(a1 || b1);  // Imprime: true (una de las condiciones es verdadera)

// ! (Negación lógica): Invierte el valor de una condición.
console.log(!a1);  // Imprime: false (porque a1 es true, pero se invierte con !)

// =====================================================
// Operadores de Tipo (para obtener información sobre los tipos de datos)
// =====================================================


// typeof: Devuelve el tipo de dato de una variable.
let num = 10;
let str = "Hola";
let arr = [1, 2, 3];
console.log(typeof num);  // Imprime: "number"
console.log(typeof str);  // Imprime: "string"
console.log(typeof arr);  // Imprime: "object"

// instanceof: Comprueba si un objeto es una instancia de una clase específica.
console.log(arr instanceof Array);  // Imprime: true (arr es un array)
console.log(str instanceof String);  // Imprime: false (str no es un objeto de tipo String)

