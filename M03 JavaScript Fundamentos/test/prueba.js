function esVocal(letra) {
    // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
    // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
    // Si no es vocal, tambien debe retornar "Dato incorrecto".
    // Tu código:
    var vocal = 'Es Vocal';
    var error = 'Dato incorrecto';
    if (letra === 'a') { return vocal;}
    else if (letra === 'e') {return vocal;}
    else if (letra === 'i') {return vocal;}
    else if (letra === 'o') {return vocal;}
    else if (letra === 'u') {return vocal;}
    else  {return error;}
 }

 console.log(esVocal('b'));