/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   var palabra = string;
   return palabra;
}

console.log(devolverString('jose'));

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var resultado = x + y;
   return resultado;
}
console.log(suma(10, 23));

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var resulresta = x - y;
   return resulresta;
}
console.log(resta(33, 3));

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var resuldivide = x / y;
   return resuldivide;
}
console.log(divide(30, 3));

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var resulmultiplica = x * y;
   return resulmultiplica;
}
console.log(multiplica(8, 3));

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var resulresto = x % y;
   return resulresto;
}
console.log(obtenerResto(26, 3));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
