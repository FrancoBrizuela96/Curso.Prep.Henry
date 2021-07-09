// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0];
  // Devuelve el primer elemento de un array
  // Tu código:
}


function devolverUltimoElemento(array) {
  const ultimoElemento = array.length;

  return array[ultimoElemento - 1];
   // Devuelve el último elemento de un array
  // Tu código:
}


function obtenerLargoDelArray(array) {

  return array.length;
  // Devuelve el largo de un array
  // Tu código:
}


function incrementarPorUno(array) {

  const nuevoArray = [];
  for ( let i = 0; i < array.length; i++ ) {
    nuevoArray[i] = array[i] + 1;
  }

  return nuevoArray;
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
}


function agregarItemAlFinalDelArray(array, elemento) {

  array.push(elemento);
  return array;

  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
}


function agregarItemAlComienzoDelArray(array, elemento) {

  array.unshift(elemento);
  return array;
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
}


function dePalabrasAFrase(palabras) {

  let stringFinal = palabras[0];

  for ( let i = 1; i < palabras.length; i++ ) {
    stringFinal = `${stringFinal} ${palabras[i]}`;
  }

  return stringFinal;
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
}


function arrayContiene(array, elemento) {

  return array.includes(elemento);
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
}


function agregarNumeros(numeros) {
  let valorFinal = 0;
  for ( let i = 0; i<numeros.length; i++) {
    valorFinal += numeros[i];
  }

  return valorFinal;
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}


function promedioResultadosTest(resultadosTest) {

  cantidadTest = 0;
  sumaResultados = 0;

  for ( let i = 0; i<resultadosTest.length; i++) {
    sumaResultados += resultadosTest[i];
    cantidadTest += 1;
  }

  return sumaResultados / cantidadTest;
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}


function numeroMasGrande(numeros) {

  let numMayor = 0;
  for ( let i = 0; i<numeros.length; i++) {
    if ( numeros[i] > numMayor ){
      numMayor = numeros[i];
    }
  }
  return numMayor;
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}


function multiplicarArgumentos() {
  if( arguments.length < 1 ) {
    return 0;
  }
  let total = 1;
  for ( let i = 0; i<arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;

  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
}


function cuentoElementos(arreglo){
  
  let cantidadMayor = 0;

  for ( let i = 0; i < arreglo.length; i++) {
    if ( arreglo[i] > 18 ) {
      cantidadMayor = cantidadMayor + 1;
    }
  }
  return cantidadMayor;
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

}


function diaDeLaSemana(numeroDeDia) {

  switch (numeroDeDia) {
    case 1: return 'Es fin de semana';
    case 2: return 'Es dia Laboral';
    case 3: return 'Es dia Laboral';
    case 4: return 'Es dia Laboral';
    case 5: return 'Es dia Laboral';
    case 6: return 'Es dia Laboral';
    case 7: return 'Es fin de semana';
  }

  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
} 


function empiezaConNueve(n) {

  let num = n.toString();

  if ( num.charAt(0) === '9' ){
    return true;
  }
  return false;

  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
}


function todosIguales(arreglo) {

  esigual = false;
  arrayIgual = arreglo[0];

  for ( let i = 0; i<arreglo.length; i++ ) {
    if ( arreglo[i] === arrayIgual ) {
      esigual = true;
    } else {
      esigual = false;
    }

  }

  return esigual;
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
} 


function mesesDelAño(array) {

  let todoOk = true;
  const newArray = [];
  
  array.forEach(element => { 

    if( element === 'Enero' ) {
      newArray.push(element);
    } else if ( element === 'Marzo' ){
      newArray.push(element);
    } else if ( element === 'Noviembre') {
      newArray.push(element);
    } 
    
  });

  todoOk = newArray.includes('Enero', 'Marzo', 'Noviembre');
  
  if (todoOk) {
    return newArray;
  } else {
    return 'No se encontraron los meses pedidos'
  }
};

  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:



function mayorACien(array) {
  const newArray = [];

  for ( let i = 0; i < array.length; i++ ) {
    if ( array[i] > 100 ) {
      newArray.push(array[i])
    }
  }

  return newArray;
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {

  const newArray = [];
  let suma = numero;

  for (var i = 0; i < 10; i++) {
    if ( suma === i ) {
      break;
    } else {
      suma = suma + 2;
      newArray.push(suma);
    }       
  }

  if ( i < 10 ) {
    return 'Se interrumpió la ejecución'
  } else {
    return newArray;
  }

  
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {

  const newArray = [];
  let suma = numero;

  for (var i = 0; i < 10; i++) {
    if ( i === 5 ) {
      continue;
    } else {
      suma = suma + 2;
      newArray.push(suma);
    }       
  }
  return newArray;
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
