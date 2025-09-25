// Arrelo de numeros
let numeros = [5,2,9,1,7];

//Orde ascendente
numeros.sort((a,b) => a - b);
console.log (numeros);

//Orden decendente
numeros.sort((a,b) => b - a);
console.log(numeros);

//Arreglo de cadena
let frutas = ["banana",  "naranja", "uva", "manzana", "kiwi,", "anona"];
frutas.sort();
console.log(frutas);

//Orden alfabetico inverso
frutas.sort((a, b) => b.localeCompare(a));
console.log(frutas);

let personas = [
    {nombre: "Juan", edad:25},
    {nombre: "Ana", edad: 30},
    {nombre: "Pedro", edad: 20}
];

personas.sort((a,b) => a.edad - b.edad);
console.log(personas); 
//[
//    {nombre: "Juan", edad:25},
//    {nombre: "Ana", edad: 30},
//    {nombre: "Pedro", edad: 20}
//];
personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(personas);

let numeros1 = [1, 2, 3, 4, 5];
numeros1.reverse();
console.log(numeros1);

let palabras = ["hola", "mundo", "javascript"];
palabras.reverse();
console.log(palabras);

let calificaciones = [
    {asignatura: "Elisb", asignatura: "Matematica", calificacion: 60},
    {asignatura: "Xiomara", asignatura: "Historia", calificacion: 100},
    {asignatura: "Camilo", asignatura: "Español", calificacion: 80},
    {asignatura: "Ramiro", asignatura: "Fisica", calificacion: 55},
    {asignatura: "Ana", asignatura: "Quimica", calificacion: 77}
];
calificaciones.sort((a, b) => b.asignatura.localeCompare(a.asignatura));
console.log(calificaciones);

calificaciones.sort((a, b) => a.asignatura.localeCompare - b.asignatura);
console.log(calificaciones);

//1
let numeros2 = [10, 3, 8, 1, 6];
numeros2.sort((a, b) => a - b);
console.log(numeros2); // [1, 3, 6, 8, 10]

//2
let animales = ["perro", "gato", "elefante", "ardilla"];
let animalesOrdenados = [...animales].sort();
console.log(animalesOrdenados); // ["ardilla", "elefante", "gato", "perro"]
console.log(animales); // ["perro", "gato", "elefante", "ardilla"] (original intacto)

//3
let estudiantes = [
    { nombre: "Luis", puntaje: 85 },
    { nombre: "Marta", puntaje: 92 },
    { nombre: "Sofía", puntaje: 78 }
];

estudiantes.sort((a, b) => b.puntaje - a.puntaje);
console.log(estudiantes);
// [
//   { nombre: "Marta", puntaje: 92 },
//   { nombre: "Luis", puntaje: 85 },
//   { nombre: "Sofía", puntaje: 78 }
// ]

//4
let numeros4 = [4, 9, 2, 7, 5];
numeros4.reverse();
console.log(numeros4); // [5, 7, 2, 9, 4]

//5
let productos = [
    { producto: "Laptop", precio: 1200 },
    { producto: "Teléfono", precio: 800 },
    { producto: "Tableta", precio: 600 }
];

let productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log(productosOrdenados);
// [
//   { producto: "Tableta", precio: 600 },
//   { producto: "Teléfono", precio: 800 },
//   { producto: "Laptop", precio: 1200 }
// ]
console.log(productos); // original intacto

//6
let frutas1 = ["manzana", "banana", "kiwi", "fresa"];

// Primero invertimos
frutas1.reverse(); // ["fresa", "kiwi", "banana", "manzana"]

// Luego ordenamos
frutas1.sort(); // ["banana", "fresa", "kiwi", "manzana"]

console.log(frutas1);
