//Este algoritmo permite calcular el indice de masa corporal

// Peso en kg / altura (en cm) . altura (en cm)

let peso
let altura
function pedirPeso(){
    peso = parseInt(prompt("Indique su peso corporal en kg"));
}
function pedirAltura(){
    altura = parseInt(prompt("Indique su altura en cemtimetros"));
}
function saludar(){
    let saludo = prompt("Ingrese su nombre");
    alert("Bienvenido/a " + saludo + "\nCalcule su Indice de Masa Corporal en nuestra calculadora IMC");
}
function calculator(){
    altura /= 100;
    let imc = peso / (altura * altura);
    imc = imc.toFixed(1);
    alert(imc);
}

do{
    saludar()
    pedirPeso()
    pedirAltura()
    calculator()
}while(ESC != true)





