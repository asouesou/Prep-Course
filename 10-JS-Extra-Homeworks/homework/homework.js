// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var i = 0;
  var arrayObj = new Array();
  for (let clave in objeto) {
    arrayObj[i] = [clave, objeto[clave]]
      i ++;
    }
  return arrayObj;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

/*   var array1 = {}
  for (var i = 0; i < string.length; i++) {
      if (Object.keys(array1).includes(string[i])) {
        array1[string[i]] = array1[string[i]] + 1
          continue
      } else {
          array1[string[i]] = 1
      }    
  }
  return array1 */

  var array1 = {};
  var cont= 0;
  for (let i = 0; i < string.length; i++) {
    cont=0;
    for (let j = 0; j < string.length; j++) {
      if ( string[i] === string[j] ) {
        cont = cont + 1;
      } 
    }
    array1[string[i]] = cont;
  }
  return array1
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var min="";
  var may=""
  for (let i = 0; i < s.length; i++) {
  
    if (s.charAt(i) === s.charAt(i).toUpperCase()) {
      may = may + s.charAt(i);
    } else {
      min = min + s.charAt(i);
    }
  } 
  return (may + min)
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
 
  var arrayDePalabras = str.split(" ");
  console.log(arrayDePalabras);
  
  var pal;
  
  for (let i=0; i < arrayDePalabras.length; i++) {
      pal = arrayDePalabras[i].split("").reverse();
      arrayDePalabras[i]= pal.join("");
    console.log(arrayDePalabras);
  }
  return arrayDePalabras.join(" ");
 }
 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número es número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  String.prototype.invertir = function(){return this.split("").reverse().join("");}
  strnumero = numero.toString();
  var inverseWord = strnumero.invertir();

    if (strnumero === inverseWord) { 
    
     return("Es capicua"); //Es capicua/palindromo.
    }
    else {
        return("No es capicua"); 
    } 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
var temp = "";
for (let i=0; i < cadena.length; i++) {
  if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      temp = temp + cadena[i];
  }
}
//return temp  o con expresiones regulares;

return cadena.replace(/a|b|c/gm,"");

}



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var boleana;
  do {
      boleana = false;
      for (var i = 0; i < arr.length - 1; i++) {
          if (arr[i].length > arr[i + 1].length) {
              var temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              boleana = true;
          }
      }
  } while (boleana);
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
   
    var o1 = {};
    var o2 = {};
    var results = [];
      
    for (var i = 0; i < arreglo1.length; i++) { //{ 4: x, 2: x, 3: x }
          o1[arreglo1[i]] = "x";
    }
  
    for (var j = 0; j < arreglo2.length; j++) { //{ 1: y, 3: y, 4: y }
          o2[arreglo2[j]] = "y";
    }
  
    for (var k in o1) {
           if (o2[k]) { //o2[3]  && o2[4] si tiene clave 3 o clave 4
              results.push(Number(k));
          }
    }
    return(results) //  3 y 4
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

