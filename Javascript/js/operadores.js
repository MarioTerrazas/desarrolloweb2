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
let estudiantes = [
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
