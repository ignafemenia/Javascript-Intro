console.log('Operadores Logicos')

const ciudadesDisponibles = new Array();

ciudadesDisponibles.push('Bogota');
ciudadesDisponibles.push('Caracas');
ciudadesDisponibles.push('Lima');
//Agregando a la lista.

const edadComprador = 25;
if(edadComprador >= 18) {
    //aca se ejecuta el codigo si la edad del comprador es >= 18
    //es decir si es mayor de edad
    console.log(`El comprador es mayor de edad`);
    console.log(`Ciudades disponibles para viaje`);
    console.log(ciudadesDisponibles);

} else {
    //El comprador no es mayor de edad entonces...
    console.log(`El comprador no es mayor de edad`);
    console.log(`No es posible ofrecer viajes`);
}

console.log(edadComprador >= 18);
console.log(edadComprador > 18);
console.log(edadComprador <= 18);
console.log(edadComprador < 18);
console.log(edadComprador == 18); //igual
console.log(edadComprador != 18); //diferente
const estaAcompanado = false;

if(edadComprador >= 18) {
    //aca se ejecuta el codigo si la edad del comprador es >= 18
    //es decir si es mayor de edad
    console.log(`El comprador es mayor de edad`);
    console.log(`Ciudades disponibles para viaje`);
    console.log(ciudadesDisponibles);

} else if (estaAcompanado) {
        console.log("El comprador menor de edad esta acompañado")
        console.log(`Ciudades disponibles para viaje`);
        console.log(ciudadesDisponibles);
    } else {
        //El comprador no es mayor de edad entonces...
        console.log(`El comprador no es mayor de edad`);
        console.log(`No es posible ofrecer viajes`);
}
    
//Otra forma
if(edadComprador >= 18 || estaAcompanado ) { //||significa OR
    //aca se ejecuta el codigo si la edad del comprador es >= 18
    //es decir si es mayor de edad
    console.log(`Es posible vender pasaje`);
    console.log(`Ciudades disponibles para viaje`);
    console.log(ciudadesDisponibles);
    } else {
        //El comprador no es mayor de edad entonces...
        console.log(`El comprador no es mayor de edad`);
        console.log(`No es posible ofrecer viajes`);
}
//Proceso de embarque
const tienePasaje = true;
console.log(`Proceso de embarque: \n \n`)
// && significa Y
//         A     Y          B       (C   O   D)
if (tienePasaje && (edadComprador >= 18 || estaAcompanado)) {
    console.log("comprador con psasaje");
} else {
    console.log("comprador sin pasaje.");
}