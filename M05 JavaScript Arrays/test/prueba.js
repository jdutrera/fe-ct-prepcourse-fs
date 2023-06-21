function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar true si el entero inicia con 9 y false en otro caso.
    // Tu código:
 
    var string = num.toString();
 if (string[0] === '9')
 {
    return true;
    }
    return false;
 }

 console.log(empiezaConNueve(6532));