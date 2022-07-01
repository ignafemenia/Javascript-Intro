console.log('Trabajando con condiciones');

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push('Bogota');
ciudadesDisponibles.push('Caracas');
ciudadesDisponibles.push('Lima');

const edadComprador = 15;
const estaAcompanado = true;
const tienePasaje = true;
const ciudadDestino = 'Lima';
let posicion = 0;


while (posicion < ciudadesDisponibles.length) {
    if (ciudadesDisponibles[0] == ciudadDestino) {
    console.log(`Destino Disponible`)
} else {
    console.log(`Destino no disponible`)
    }
    posicion = posicion + 1; // o se puede hacer posicion++;
}
