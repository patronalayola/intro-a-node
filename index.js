//LLAMANDO A LA DEPENDENCIA COWSAY

var cowsay = require("cowsay");

// VARIABLES
var historieta = require("./inicio")

const personaje = "José";
const lugar = "Centraal";
const edad = Math.random() * 100;

console.log(historieta.historia(personaje, lugar, edad));


//CUENTO USANDO VARIABLES


/*let historia = "Hola " + nombre + ", soy la vaca loca de la Condesa, y te estoy buscando para decirte lo siguiente: "
+ fraseVaca + " Después de 3 meses, te graduarás como " + full + " Después podrás continuar tu aprendizaje como " + full +
"Para probar que estás aprendiendo a programar, deberás imprimir el resultado de 4 * 4 = " + valor
*/

//IMPRESIÓN DE LA HISTORIA

//console.log(historia);


//UTILIZANDO MÓDULO DE VACA
/*
console.log(cowsay.say({
	text : fraseVaca,
	e : "Xo",
	T : "U "
}));
*/
//-------------------------------------------------------------------------------

/*
var nombre = "Jose";
let edad = "30";
const cabello = "cafe";
*/
