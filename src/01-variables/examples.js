/**
 * LET
 */
let cliente = "Germán";
cliente = "Ana";
cliente = 20;
console.log(cliente); // 20

let precio;
console.log(precio); // undefined
precio = 20.5;
console.log(precio); // 20.5


/**
 * CONST
 */
const clienteConst = "Germán";
// cliente = "Ana"; // TypeError en modo estricto habitual

const persona = { nombre: "Ana", edad: 30 };
console.log(persona.edad);
persona.edad = 31; // válido: mutamos el objeto
console.log(persona.edad);
// persona = {};    // inválido: reasignación del enlace


/**
 * VAR
 */
function ejemplo() {
  if (true) {
    var x = 1;
    let y = 2;
  }
  console.log(x); // 1 — aún visible
  // console.log(y); // ReferenceError
}