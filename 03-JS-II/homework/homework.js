// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x > y) {
    return x;
  } else 
    return y;
}

function mayoriaDeEdad(edad) {
  if (edad >= 18) {
    return 'Allowed';
  } else {
    return 'Not allowed';
  }
}
  
function conection(status) {
  if ( status === 1) {
    return 'Online';
  } else if ( status === 2) {
    return 'Away';
  } else {
    return 'Offline';
  }
}

function saludo(idioma) {
  if ( idioma === 'aleman') {
    return 'Guten Tag!';
  } else if ( idioma === 'mandarin' ) {
    return 'Ni Hao!';
  } else if ( idioma === 'ingles' ) {
    return 'Hello!';
  } else {
    return 'Hola!';
  }
}

function colors(color) {

  switch (color) {
    case 'blue': 
      return 'This is blue';
    case 'red': 
      return 'This is red';
    case 'green': 
      return 'This is green';
    case 'orange':
      return 'This is orange';
    default: 
      return 'Color not found';
  }
}

function esDiezOCinco(numero) {
  if ( numero === 10 || numero === 5) {
    return true;
  }
  else {
    return false;
  }
}

function estaEnRango(numero) {
  if ( numero < 50 && numero > 20 ){
    return true;
  } 

  return false;
 
}

function esEntero(numero) {
  if ( Math.floor(numero) !== numero ) {
    return false;
  }
  else {
    return true;
  }
}

function fizzBuzz(numero) {
  if ( numero % 3 === 0 && numero % 5 === 0 ) {
    return 'fizzbuzz';
  } else if ( numero % 3 === 0) {
    return 'fizz';
  } else if (numero % 5 ===0 ) {
    return 'buzz'
  } else {
    return numero;
  }
}

function operadoresLogicos(num1, num2, num3) {
  if ( num1 === 0 || num2 === 0 || num3 ===0 ) {
    return 'Error';
  } else if ( num1 < 0 || num2 < 0 || num3 <0) {
      return 'Hay negativos';
  } else if ( num1 > num2 && num1 > num3 && num1 > 0 ) {
      return 'Número 1 es mayor y positivo';
  } else if ( num3 > num1 && num3 > num2 ) {
      return num3 + 1;
  } else {
    return false;
  }
}

function esPrimo(numero) {
  if( numero < 2) return false;
  if(numero === 2) return true;
  for(var i = 2; i < numero; i++) {
    if(numero % i === 0) {
      return false;
    }
  }
  return true;
}

function esVerdadero(valor){
  if ( valor ) {
    return 'Soy verdadero';
  } 

  return 'Soy falso';
}

function tablaDelSeis(){
  
  let arraydel6 = [];

  for ( let i = 0; i <= 10; i++ ) {
    let resultado = 6 * i;
    arraydel6.push(resultado);
    console.log(resultado);
  }
   
  return arraydel6;
}

function tieneTresDigitos(numero){

  if ( numero > 99 && numero < 1000 ) {
    return true; 
  } else {
    return false;
  }
}

function doWhile(numero) {
  let i = 1;
  numerito = numero;
  do { 
    numerito = numerito + 5;
    i = i + 1;
    
  } while (i !== 9 )

  return numerito;
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
