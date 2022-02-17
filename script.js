//Este algoritmo permite calcular el indice de masa corporal

// Peso en kg / altura (en cm) . altura (en cm)

// Variables globales

let peso;
let altura;
let esc;
let imc;
let query = "";
let recomendation = "\nRecomendamos que acuda a su medico de confianza para contrastar estos datos"; 
let thisMean = ": \nEsto significa que posee una ";

// Funciones  

function pedirPeso(){
    peso = parseInt(prompt("Indique su peso corporal en kg"));
}

function pedirAltura(){
    altura = parseInt(prompt("Indique su altura en centimetros"));
}

function saludar(){
    let saludo = prompt("Ingrese su nombre");
    alert("Bienvenido/a " + saludo + "\nCalcule su Indice de Masa Corporal en nuestra calculadora IMC");
}

function calculator(){
    altura /= 100;
    imc = peso / (altura * altura);
    imc = imc.toFixed(1);
}

function condition(mayorA, menorA, resultCondition){
    alert("Su IMC es entre " + mayorA + " - " + menorA + thisMean + resultCondition + recomendation)
}

// Bucle while 

while(query != "ESC"){
    saludar();
    pedirPeso();
    pedirAltura();
    calculator();
    if (imc < 15){
        alert("Su IMC es inferior a 15" + thisMean + "delgadez muy severa." + recomendation)
    }else if ((imc >= 15) && (imc <= 15.9)){
        condition(15, 15.9, "delgadez severa")
    }else if((imc >= 16) && (imc <=  18.4)){
        condition(16, 18.4, "delgadez")
    }else if((imc >= 18.5) && (imc <=  24.9)){
        condition(18.5, 24.9, "peso saludable")
    }else if((imc >= 25) && (imc <=  29.9)){
        condition(25, 29.9, "sobrepeso")
    }else if((imc >= 30) && (imc <=  34.9)){
        condition(30, 34.9, "obesidad moderada")
    }
    else if((imc >= 35) && (imc <=  39.9)){
        condition(35, 39.9, "obesidad severa")
    }
    else if (imc > 40){
        alert("Su IMC es mayor a 40" + thisMean + "obesidad severa (morbida)." + recomendation)
    }
    query = prompt("Escriba AGAIN para repetir su IMC \nEscriba ESC si quiere dejar de calcular su IMC ");
}





