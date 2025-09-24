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
console.log(persona); 
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

