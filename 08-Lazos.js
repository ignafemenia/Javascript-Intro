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
let destinoDisponible = false;

while (posicion < ciudadesDisponibles.length) {
    if (ciudadesDisponibles[0] == ciudadDestino) {
        console.log(`Destino Disponible`)
        destinoDisponible = true;
        break;
} else {
    console.log(`Destino no disponible`)
    }
    posicion = posicion + 1; // o se puede hacer posicion++;
}

console.log(`El destino disponible`, destinoDisponible);


//lazo for
for (posicion = 0; posicion < ciudadDestino.length; posicion++){
    if (ciudadDestino[posicion] == ciudadDestino) {
        destinoDisponible = true;
        break;
    }
}