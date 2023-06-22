function crearGato(nombre, edad) {
    // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
    // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
    // Además, agregar una propiedad con el nombre "meow".
    // La propiedad "meow" será una función que retorne el string: "Meow!".
    // Retornar el objeto.
    // Tu código:
    var Gato = {};
    Gato.nombre = nombre;
    Gato.edad = edad;
    Gato.meow = function (){console.log('Meow!')};
   return Gato;
 }
 console.log(crearGato('marcos',28));