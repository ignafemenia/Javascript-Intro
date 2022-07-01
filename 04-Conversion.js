console.log('Conversion tipo de datos');

console.log("10" + "2");
//102, concatenado por que el tipo de dato esta como texto

console.log(parseInt("10") + parseInt("2"));
//12 por que lo transforma a numero

console.log("10" / "2");
//js entiende y realiza la conversion automatica entonces divide y da 5
//no existe una division de texto entonces lo hace automatico

console.log("Maria" / "2");
//NaN no a number, intenta hacer una division pero no puede.