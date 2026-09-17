/**
 * BÁSICOS
 */
let nombre="Alejandro";
console.log(nombre);
nombre="Pepe";
console.log(nombre);

const PI=3.1416;
//PI=67.67; Uncaught TypeError
console.log(PI);

let edad;
console.log(edad);
edad=20;
console.log(edad);

let precioBase=100;
const IVA=0.21;
let precioFinal=precioBase-(precioBase*IVA);
console.log(precioFinal);


/**
 * PARA PENSAR
 */
let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);
// En la primera salida saldra un 2 y en la segunda un 1

const lista = [1, 2];
lista.push(3);
console.log(lista);
//lista = [];
// Por la consola saldría [1, 2, 3], falla porque al estar declarada la variable lista con const no se le puede reasignar otro valor

let nombre2 = "Ana";
let edad2 = 30;
let tienePareja = true;
let sueldo = 1250.5;


/**
 * RETO
 */
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
//3
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
/**
 * 0
 * 1
 * 2
 */