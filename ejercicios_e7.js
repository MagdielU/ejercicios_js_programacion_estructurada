//Ejercicio1
let agregarFinal = (arreglo, ...elementos) => {
    arreglo.push(...elementos);
    return arreglo;
}

let agregarFinal2 = (arreglo, ...elementos) => (arreglo.push(...elementos), arreglo);

let numeros1 = [1, 2, 3, 4];
console.log(agregarFinal(numeros1, 5, 6));


//Ejercicio2
let agregarInicio = (arreglo, ...elementos) => {
    arreglo.unshift(...elementos);
    return arreglo;
}

let agregarInicio2 = (arreglo, ...elementos) => (arreglo.unshift(...elementos), arreglo);

let numeros2 = [10, 20, 30];
console.log(agregarInicio(numeros2, 5, 7));


//Ejercicio3
let eliminarUltimo = (arreglo) => {
    let ultimo = arreglo.pop();
    return ultimo;
}

let eliminarUltimo2 = arreglo => ultimo = arreglo.pop();

let numeros3 = [100, 200, 300];
console.log(eliminarUltimo(numeros3));


//Ejercicio4
let eliminarPrimero = (arreglo) => {
    let primero = arreglo.shift();
    return primero;
}

let eliminarPrimero2 = arreglo => primero = arreglo.shift();

let numeros4 = [8, 9, 10, 11];
console.log(eliminarPrimero(numeros4));


//Ejercicio5
let buscarIndice = (arreglo, elemento, inicio = 0) => {
    return arreglo.indexOf(elemento, inicio);
}

let buscarIndice2 = (arreglo, elemento, inicio = 0) => arreglo.indexOf(elemento, inicio);

let numeros5 = [2, 4, 6, 8, 10];
console.log(buscarIndice(numeros5, 8));


//Ejercicio6
let contarElementos = (arreglo) => {
    return arreglo.length;
}

let contarElementos2 = arreglo => arreglo.length;

let numeros6 = [1, 2, 3, 4, 5, 6];
console.log(contarElementos(numeros6));


//Ejercicio7
let ordenarAsc = (arreglo) => {
    return arreglo.sort((a, b) => a - b);
}

let ordenarAsc2 = arreglo => arreglo.sort((a, b) => a - b);

let numeros7 = [30, 10, 50, 20, 40];
console.log(ordenarAsc(numeros7));


//Ejercicio8
let unirConSeparador = (arreglo, separador) => {
    return arreglo.join(separador);
}

let unirConSeparador2 = (arreglo, separador) => arreglo.join(separador);

let numeros8 = [1, 2, 3, 4, 5];
console.log(unirConSeparador(numeros8, "-"));


//Ejercicio9
let combinar = (...elementos) => {
    return [].concat(...elementos);
}

let combinar2 = (...elementos) => [].concat(...elementos);

let numeros9a = [1, 2];
let numeros9b = [3, 4];
console.log(combinar(numeros9a, numeros9b, 5, 6));


//Ejercicio10
let recorrer = (arreglo, callback) => {
    arreglo.forEach(callback);
}

let recorrer2 = (arreglo, callback) => arreglo.forEach(callback);

let numeros10 = [2, 4, 6];
recorrer(numeros10, n => console.log(n * 2));


//Ejercicio11
let mapear = (arreglo, callback) => {
    return arreglo.map(callback);
}

let mapear2 = (arreglo, callback) => arreglo.map(callback);

let numeros11 = [1, 2, 3];
console.log(mapear(numeros11, n => n * 3));


//Ejercicio12
let filtrar = (arreglo, callback) => {
    return arreglo.filter(callback);
}

let filtrar2 = (arreglo, callback) => arreglo.filter(callback);

let numeros12 = [5, 10, 15, 20];
console.log(filtrar(numeros12, n => n > 10));


//Ejercicio13
let reducir = (arreglo, callback, inicial = 0) => {
    return arreglo.reduce(callback, inicial);
}

let reducir2 = (arreglo, callback, inicial = 0) => arreglo.reduce(callback, inicial);

let numeros13 = [1, 2, 3, 4];
console.log(reducir(numeros13, (a, b) => a + b, 0));
