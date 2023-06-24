
    class Usuario {
       constructor (usuario, nombre, email, password){
          this.usuario = usuario;
          this.nombre = nombre;
          this.email = email;
          this.password = password;
          this.saludar = function (){
             return 'Hola mi nombre es ' + this.nombre;
          };
       }
    };
   

     var usuario1 = new Usuario('Jutrera', 'Jose', 'jdu.utrera@gmail.com', '1234'            );


console.log(usuario1);
console.log(usuario1.saludar());

