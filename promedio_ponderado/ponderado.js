//[(n1*c1)+(n2*c2)+(n3*c3)] / (c1 + c2 + c3)
// n= nota c= credito
// multiplicar cada número del conjunto por su respectivo crédito, sumar todos los resultados y dividirlo entre la suma de todos los créditos.


// 1: Definir el conjunto de números junto al peso de cada elemento
//Para esto vamos a crear un array de objetos llamado notes. Cada objeto tendrá tres valores: course con el nombre de la materia (aunque en realidad no lo utilizaremos 😅), note con la nota de la materia y credit con los créditos de la materia.
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];


//Multiplicar cada número de la lista por su peso
//Vamos a usar de nuevo el método map de los arrays. Crearemos un nuevo arreglo de solo números a partir de multiplicar cada nota con sus créditos.
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});


//Sumar todos los elementos del arreglo de elementos multiplicados por su peso
//Vamos a usar de nuevo el método reduce de los arrays.

//Crearemos una nueva variable notesWithCredit que tenga como resultado la suma de todos los elementos del arreglo sumOfNotesWithCredit. Recuerda que la función reduce recibe una función con dos parámetros: el valor acumulado (que para evitar errores debemos inicializar con 0) y el nuevo elemento de los arrays.
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);


//Sumar todos los pesos (créditos)
//Sí, otra vez map y reduce. Vamos a crear un nuevo arreglo credits únicamente con los créditos de cada materia y otra nueva variable sumOfCredits que recorra el arreglo credits y sume sus elementos.
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});


//Hacer la división entre ambas “sumas”
//Lo último que nos falta es dividir nuestra variable sumOfNotesWithCredit sobre la variable sumOfCredits.
const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;


//En este caso, el promedio ponderado de una nota de 10 con créditos de 2, otra nota de 8 con un crédito de 5 y una última nota de 7 con créditos de 5 nos da como resultado 7.916.

//La media aritmética sin tener en cuenta el peso de cada nota habría sido 8.333.

