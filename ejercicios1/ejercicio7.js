// tabla de multiplicar de un numero introducido por pantalla
var num = parseInt(prompt("Ingresa el numero a evaluar",1));

while (num <= 0 || isNaN(num)) {
    num = parseInt(prompt("Ingresa un numero correcto a evaluar",1));
}
document.write("<h1>Tabla de multiplicar del numero "+ num +"</h1>");
for(var i = 1; i <= 10; i++){
    document.write(num +" * "+ i +" = "+ num*i +"<br>");
    console.log(num+" * "+i+" = "+num*i);
}