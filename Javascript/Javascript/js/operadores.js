/*let a=10;
let b=5;
a+=1;

console.log(a);
a=a+b;
console.log("a+b: "+a);
a=11;
a+=b;
console.log("a+=b: "+a);
a++;
console.log("a++ : "+a);
a--;
console.log("a-- : "+a);

if (a%2==0)
    console.log("a es Par")
else
    console.log("a es Impar")
console.log(a+b+Number("5"))
gnerar un array de10 elementos
Nombre:Mario 
Nota:randomico entre 20-100
3.-Mostrar la not mayr menor y promedio
*/

// Generar array de 10 elementos con nombres y notas aleatorias

// Generar array de 10 elementos con nombres y notas aleatorias
/*let estudiantes = [
    { nombre: "Pedro", nota: Math.floor(Math.random() * (100 - 20 + 1) + 20) },
    { nombre: "Maria", nota: Math.floor(Math.random() * (100 - 20 + 1) + 20) },
    { nombre: "Juan", nota: Math.floor(Math.random() * (100 - 20 + 1) + 20) },
    { nombre: "Pepito", nota: Math.floor(Math.random() * (100 - 20 + 1) + 20) },
    { nombre: "Luis", nota: Math.floor(Math.random() * (100 - 20 + 1) + 20) },
    { nombre: "Carlos", nota: Math.floor(Math.random() * (100 - 20 + 1) + 20) },
    { nombre: "Yenny", nota: Math.floor(Math.random() * (100 - 20 + 1) + 20) },
    { nombre: "Lucia", nota: Math.floor(Math.random() * (100 - 20 + 1) + 20) },
    { nombre: "Nelson", nota: Math.floor(Math.random() * (100 - 20 + 1) + 20) },
    { nombre: "Asiel", nota: Math.floor(Math.random() * (100 - 20 + 1) + 20) }
];

// Mostrar el array de estudiantes
console.log("Array de 10 estudiantes:");
console.log(estudiantes);

// Encontrar la nota mayor, menor y calcular el promedio
let notaMayor = estudiantes[0].nota;
let notaMenor = estudiantes[0].nota;
let sumaNotas = estudiantes[0].nota;
for (let i = 1; i < estudiantes.length; i++) {
    let nota = estudiantes[i].nota;
    sumaNotas += nota;
    if (nota > notaMayor) {
        notaMayor = nota;
    }
    if (nota < notaMenor) {
        notaMenor = nota;
    }
}
let promedio = sumaNotas / estudiantes.length;

// Mostrar resultados
console.log("Nota mayor:", notaMayor);
console.log("Nota menor:", notaMenor);
console.log("Promedio de notas:", promedio);
*/
// Array de notas con nombres y notas aleatorias entre 2 y 10
// Función para generar un número aleatorio entre un rango dado
/*function Randomico(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let notas = [
    { nombre: "Pedro", nota: 0 },
    { nombre: "Maria", nota: 0 },
    { nombre: "Juan", nota: 0 },
    { nombre: "Pepito", nota: 0 },
    { nombre: "Luis", nota: 0 },
    { nombre: "Carlos", nota: 0 },
    { nombre: "Yenny", nota: 0 },
    { nombre: "Lucia", nota: 0 },
    { nombre: "Nelson", nota: 0 },
    { nombre: "Asiel", nota: 0 }
];

// Función para cargar notas aleatorias entre 2 y 10 a cada estudiante
function cargarNotas() {
    notas.forEach(nota => {
        nota.nota = Randomico(2, 10);
    });
}

// Objeto para almacenar notas clasificadas por categorías de nota
// Función para clasificar una nota
function clasificarNota(nota) {
    let clasificacion;
    switch (nota) {
        case 2:
        case 3:
        case 4:
            clasificacion = "Insuficiente";
            break;
        case 5:
        case 6:
            clasificacion = "Suficiente";
            break;
        case 7:
        case 8:
            clasificacion = "Bien";
            break;
        case 9:
            clasificacion = "Notable";
            break;
        case 10:
            clasificacion = "Sobresaliente";
            break;
        default:
            clasificacion = "Fuera de rango";
    }
    return clasificacion;
}

// Función para imprimir las notas
function imprimirNotas() {
    notas.forEach(nota => {
        console.log(`${nota.nombre} - ${nota.nota} - ${clasificarNota(nota.nota)}\n`);
    });
}

// Cargar notas aleatorias
cargarNotas();
// Imprimir notas clasificadas
imprimirNotas();
*/
/*
function generarNombresCompletos(cantidad) {
    const nombres = [
        "Juan",
        "María",
        "Pedro",
        "Ana",
        "Luis",
        "Laura",
        "Carlos",
        "Sofía",
        "Javier",
        "Elena",
        "Diego",
        "Lucía",
        "Miguel",
        "Carmen",
        "Manuel",
        "Paula",
        "Francisco",
        "Isabel",
        "David",
        "Andrea"
    ];

    const apellidos = [
        "García",
        "Martínez",
        "López",
        "González",
        "Rodríguez",
        "Hernández",
        "Sánchez",
        "Pérez",
        "Martín",
        "Gómez",
        "Fernández",
        "Díaz",
        "Moreno",
        "Álvarez",
        "Romero",
        "Ruiz",
        "Alonso",
        "Navarro",
        "Torres",
        "Jiménez"
    ];

    let nombresCompletos = [];
    for (let i = 0; i < cantidad; i++) {
        let nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
        let apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
        let nombreCompleto = `${nombreAleatorio} ${apellidoAleatorio}`;
        nombresCompletos.push(nombreCompleto);
    }
    return nombresCompletos;
}

// Generar 10 nombres completos aleatorios
const cantidad = 10;
const nombresAleatorios = generarNombresCompletos(cantidad);
console.log(nombresAleatorios);
*/

// Definición de la función para generar un número aleatorio entre un mínimo y un máximo (ambos inclusive)
/*function Randomico(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Función para generar un nombre completo aleatorio combinando un nombre aleatorio y un apellido aleatorio
function generarNombreCompleto() {
    // Lista de nombres y apellidos
    const nombres = [
        "Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofía", "Javier", "Elena",
        "Diego", "Lucía", "Miguel", "Carmen", "Manuel", "Paula", "Francisco", "Isabel", "David", "Andrea"
    ];
    const apellidos = [
        "García", "Martínez", "López", "González", "Rodríguez", "Hernández", "Sánchez", "Pérez", "Martín",
        "Gómez", "Fernández", "Díaz", "Moreno", "Álvarez", "Romero", "Ruiz", "Alonso", "Navarro", "Torres", "Jiménez"
    ];

    // Se elige un nombre aleatorio y un apellido aleatorio de las listas proporcionadas
    let nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    let apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];

    // Se combina el nombre y el apellido para formar un nombre completo
    return `${nombreAleatorio} ${apellidoAleatorio}`;
}

// Función para generar una lista de nombres completos aleatorios
function generarNombresCompletos(cantidad) {
    let nombresCompletos = [];
    // Se genera la cantidad especificada de nombres completos aleatorios llamando a la función generarNombreCompleto()
    for (let i = 0; i < cantidad; i++) {
        nombresCompletos.push(generarNombreCompleto());
    }
    return nombresCompletos;
}

// Generar 10 nombres completos aleatorios
const cantidad = 10;
const nombresAleatorios = generarNombresCompletos(cantidad);

// Imprimir los nombres completos aleatorios en la consola
// Función para imprimir un nombre aleatorio
function imprimirNombreyApellido(nombreAleatorio) {
    console.log(nombreAleatorio);
}

// Llamar a la función para imprimir un nombre aleatorio
const nombreAleatorio = generarNombreCompleto();
imprimirNombreyApellido(nombreAleatorio);
*/
const NELEMENTOS=10;

    let nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofía", "Javier", "Elena", "Diego", "Lucía", "Miguel", "Carmen", "Manuel", "Paula", "Francisco", "Isabel", "David", "Andrea"];
    let apellidos = ["García", "Martínez", "López", "González", "Rodríguez", "Hernández", "Sánchez", "Pérez", "Martín", "Gómez", "Fernández", "Díaz", "Moreno", "Álvarez", "Romero", "Ruiz", "Alonso", "Navarro", "Torres", "Jiménez"];

    let nomape = [];
function generarNomApe(){
    let nomal,apeal;
    for (let i = 0; i < NELEMENTOS; i++) { // Itera dos veces, una para el nombre y otra para el apellido
        nomal= nombres[Math.floor(Math.random() * nombres.length)];
        apeal= apellidos[Math.floor(Math.random() * apellidos.length)];// Selecciona la lista de nombres o apellidos
        nomape.push(nomal+" "+apeal)
    }

}
function imprimr(){
    nomape.forEach(persona => {
        console.log(persona);
    });
}
// Ejemplo de uso:
generarNomApe();
imprimr(); // Imprime un nombre completo aleatorio en la consola
