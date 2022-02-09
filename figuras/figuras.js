//codigo cuadrado//
console.group("cuadrado");

//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}
//console.log("el perímetro dl cuadrado es " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("el área es " + areaCuadrado + "cm^2");

console.groupEnd();

//codigo del triángulo//
console.group("triángulo");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log("los lados del triángulo miden " 
//+ ladoTriangulo1 
//+ "cm, " 
//+ ladoTriangulo2 
//+ "cm, " 
//+ baseTriangulo 
//+ "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("la altura del triángulo es " + alturaTriangulo);

function perimetroTriangulo (lado1, lado2, base) {
    return (lado1 + lado2 + base);
}
//console.log("el perímetro del triángulo es " * perimetroTriangulo);

function areaTriangulo (base, altura) {
    return (base  * altura) /2;
}
console.log("el área de triánglo es " + areaTriangulo);


console.groupEnd();

//codigo circulo//

console.group("circulo");

//const radioCirculo = 4;
//console.log("el radio de circulo es " + radioCirculo + "cm");

function diametroCirulo (radio){
    return radio * 2;
}

const PI = Math.PI;
console.log("pi es " + PI);

function perimetroCirculo (radio){
    const diametro = diametroCirulo(radio);
    return diametro * PI;
}
  
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

//aqui interactuamos con el html

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);

    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);

    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}


function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);

    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);

    const area = areaTriangulo(value1,value2,value3);
    alert("El area del triangulo es: " + area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

    const perimetro = perimetroCirculo(value); 
    alert("el perimeteo del circulo es " + perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

    const area = areaCirculo(value);
    alert("el area del circulo es " + area);
}