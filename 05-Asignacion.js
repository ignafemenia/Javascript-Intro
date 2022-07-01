console.log('Asignacion Variables');
let miNombre = "Leonardo";
console.log(miNombre);

const miApellido = "Lacruz";

miNombre = miNombre + miApellido;
console.log(miNombre);
//Error, es constante.
//cambiamos los const por los let (segunda linea)
//acepta el cambio, tambien podriamos haber realizado un cambio en miNombre.

const textoMiNombre = `Mi nombre es: ${miNombre} ${miApellido}`;
//comillas simples invertidas
//agregando variables adentros con ${}
console.log(textoMiNombre);
//mi nombre es : Leonardo Lacruz, sustituye correctamente
//si uso comillas doble sale mi nombre es $minombre... NO SIRVE.
//lo mismo pasa con comillas simples.

const variableTexto = "Un texto";
console.log(variableTexto);
variableTexto = "Otro valor"; //da error por constante.
