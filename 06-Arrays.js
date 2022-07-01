console.log(`Trabajando con Listas`);

const Bogota = "Bogota";
const Lima = "Lima";
const Santiago = "Santiago";
const BuenosAires = "Buenos Aires";

console.log(Bogota, Lima, Santiago, BuenosAires);
//da todas las capitales
//const ciudadesDisponibles = ['Bogota', 'Lima', 'Santiago', 'Buenos Aires']
console.log(ciudadesDisponibles);
//lo presenta de la misma forma.
const ciudadesDisponibles = new Array();

ciudadesDisponibles.push('Bogota');
ciudadesDisponibles.push('Caracas');
ciudadesDisponibles.push('Lima');
//Agregando a la lista.

console.log(ciudadesDisponibles);

const ciudadesMasVendidas = [];
console.log(ciudadesMasVendidas);
ciudadesMasVendidas.push('Sao Pablo');
ciudadesMasVendidas.push('Buenos Aires');
console.log(ciudadesMasVendidas);

console.log(ciudadesDisponibles[2]);
//accediendo a elementos de la lista
//acordarse que empieza a contar desde el 0 
console.log(ciudadesMasVendidas[0]);
const cantidadCiudades = ciudadesDisponibles.length;
console.log(`Tenemos ${cantidadCiudades} ciudadesDisponibles`);
//nos devuelve el valor de 3

ciudadesDisponibles.splice(1, 1);
//splice : primer numero en que posicion, y segundo cuantos elementos.
console.log(ciudadesDisponibles);
//no sale caracas.
//si no pongo el segundo numero de splice me elimina los elementos de la posicion en adelante.
