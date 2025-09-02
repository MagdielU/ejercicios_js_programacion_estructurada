let arreglo = [1, 2, 3, "texto", true];
const arreglo2 = [1, 2, 3, "texto", true];

let arreglo3 = new Array(1, 2, 3);

let arreglo4 = [];


//metodo arreglo
//1
let numeros = [1, 2, 3];
let longitud = numeros.push(4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(longitud); // 5

//2
let letras = ['b', 'c'];
let longitud2 = letras.unshift('a');
console.log(letras); // ['a', 'b',

//3
let frutas = ['manzana', 'banana', 'naranja'];
let ultima = frutas.pop();
console.log(frutas); // ['manzana', 'banana']
console.log(ultima); // 'naranja'

//4
let colores = ['rojo', 'verde', 'azul'];
let primero = colores.shift();
console.log(colores); // ['verde', 'azul']
console.log(primero); // 'rojo'

//5
let numeros2 = [10, 20, 30, 20, 40];
let indice = numeros2.indexOf(20); // 1
let indiceDesde2 = numeros2.indexOf(20, 2); // 3
console.log(indice); // 1
console.log(indiceDesde2); // 3

//6
let arreglo6 = [1, 2, 3];
console.log(arreglo6.length); // 3
arreglo6.length = 1; // Trunca a [1]
arreglo6.length = 5; // Extiende a [1, undefined, undefined,
//undefined, undefined];

//7
let numeros3 = [3, 1, 4, 2];
numeros3.sort((a, b) => a - b); // Orden ascendente
console.log(numeros3); // [1, 2, 3, 4]

//8
let palabras = ['hola', 'mundo'];
let texto = palabras.join(' '); // 'hola mundo'

//9
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2, [5]);
console.log(combinado); // [1, 2, 3, 4, 5]

//10
let colores2 = ['rojo', 'verde', 'azul'];
colores2.forEach(color => console.log(color));
// Imprime: rojo, verde, azul

//11
let numeros4 = [1, 2, 3];
let dobles = numeros4.map(x => x * 2);
console.log(dobles); // [2, 4, 6]

//12
let numeros5 = [1, 2, 3, 4];
let pares = numeros5.filter(x => x % 2 === 0);
console.log(pares); // [2, 4]

//13
let numeros6 = [1, 2, 3, 4];
let suma = numeros6.reduce((acc, curr) => acc + curr, 0);
console.log(suma); // 10

//14
let numeros7 = [1, 2, 3, 4];
let hayPares = numeros7.some(x => x % 2 === 0);
console.log(hayPares); // true

//15
let numeros8 = [2, 4, 6, 8];
let todosPares = numeros8.every(x => x % 2 === 0);
console.log(todosPares); // true

//16
let numeros9 = [1, 2, 3, 4];
let encontrado = numeros9.find(x => x > 2);
console.log(encontrado); // 3

//17
let numeros10 = [1, 2, 3, 4];
let indice2 = numeros10.findIndex(x => x > 2);
console.log(indice); // 2

//18
let colores3 = ['rojo', 'verde', 'azul'];
let iterador = colores3.entries();
console.log([...iterador]);
// [[0, 'rojo'], [1, 'verde'], [2, 'azul']]

//19
let colores4 = ['rojo', 'verde', 'azul'];
let iterador2 = colores4.keys();
console.log([...iterador2]); // [0, 1, 2]

//20
let colores5 = ['rojo', 'verde', 'azul'];
let iterador3 = colores5.values();
console.log([...iterador3]); // ['rojo', 'verde', 'azul']

let colores6 = ['rojo', 'verde', 'azul'];
for (let i = 0; i < colores6.length; i++){
    console.log(colores6[i]);
}