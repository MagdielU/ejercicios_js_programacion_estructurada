//const numeros = ['1', '2', '3', '4', '5'];

//const suma = numeros.reduce((acc, num) => acc + num, 0);

//console.log(suma); // 15

const calificaciones = [80, 90, 70, 85, 95];

const promedio = calificaciones.reduce((acc, num) => acc + num, 0);

const productos = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Pantalón", precio: 30 },
{ nombre: "Zapatos", precio: 50 }
];
const total = productos.reduce((acc, prod) => acc + prod.precio, 0);
console.log(total);

console.log(total); // 100
const nombres = ["Ana", "Luis", "Pedro", "María"];

const encontrado = nombres.find(nombre => nombre.startsWith("P"));

console.log(encontrado); // "Pedro"

const edades = [25, 35, 51, 10 ,8 , 13];

const resultados = edades.find(e => e <10 );
console.log(resultados);

const usuarios = [
    { id: 1, nombre: "Carlos", salario: 20000 },
    { id: 2, nombre: "Lucía", salario: 17300 },
    { id: 3, nombre: "Marta", salario: 11000 },
    { id: 4, nombre: "Eliab", salario: 18000 }
];

const salarioEncontrado = usuarios.find(u => u.salario > 15000);
console.log(salarioEncontrado);

const usuarios1 = [
    { id: 1, nombre: "Carlos", salario: 20000 },
    { id: 2, nombre: "Lucía", salario: 17300 },
    { id: 3, nombre: "Marta", salario: 11000 },
    { id: 4, nombre: "Eliab", salario: 21000 },
    { id: 5, nombre: "Elyin", salario: 23000 }
];

const salarioBajos = usuarios1.filter (u => u.salario < 20000);
console.log(salarioBajos);


const salarioEncontrado1 = usuarios1.find(u => u.salario <20000 && u.nombre.startsWith("E"));
console.log(salarioEncontrado1);

const todosSalarioAltos = usuarios1.every(u => u.salario > 20000);
console.log(todosSalarioAltos);

const unoTieneMayorA22 = usuarios.some(u => u.usuarios > 22000);
console.log('Hay salario mayor de 20000');

const personas = [
  { id: 1, nombre: "Ana", edad: 17 },
  { id: 2, nombre: "Luis", edad: 22 },
  { id: 3, nombre: "Marta", edad: 30 },
  { id: 4, nombre: "Pedro", edad: 15 },
  { id: 5, nombre: "Sofía", edad: 25 },
  { id: 6, nombre: "Diego", edad: 40 },
  { id: 7, nombre: "Carla", edad: 19 },
  { id: 8, nombre: "Jorge", edad: 33 },
  { id: 9, nombre: "Lucía", edad: 28 },
  { id: 10, nombre: "Raúl", edad: 16 },
  { id: 11, nombre: "Elena", edad: 21 },
  { id: 12, nombre: "Andrés", edad: 35 }
];

// 1. Personas mayores o iguales a 18 años
const mayoresDeEdad = personas.filter(p => p.edad >= 18);
console.log("1. Mayores de edad:", mayoresDeEdad);

// 2. Primera persona cuyo nombre comienza con "L"
const empiezaConL = personas.find(p => p.nombre.startsWith("L"));
console.log("2. Primera persona con L:", empiezaConL);

// 3. Suma total de edades
const sumaEdades = personas.reduce((acc, p) => acc + p.edad, 0);
console.log("3. Suma total de edades:", sumaEdades);

// 4. Verificar si todos son mayores o iguales a 15
const todosMayores15 = personas.every(p => p.edad >= 15);
console.log("4. ¿Todos mayores o iguales a 15?:", todosMayores15);

// 5. Comprobar si existe alguien con 40 años
const existe40 = personas.some(p => p.edad === 40);
console.log("5. ¿Existe alguien con 40 años?:", existe40);
