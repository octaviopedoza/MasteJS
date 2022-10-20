//Una variable es un contenedor de información, las varibles dentro de JS se declaran con la palabra reservada "var"

var pais = "mexico";
var continente = "America";
console.log(pais);
console.log(continente);

alert(pais+" "+" "+continente);


// podemos definir variablkes ya sea con var o con let, la diferencia que hay entre cada una es que las variables var
//se usan para variables globales y let se utiliza para limitar una variable a donde se esta utilizando  ( por lo general dentro de funciones)

var contador = 10;
var i = 0
for(i = 0; i < contador; i++){
    let contador = i;
    console.log("CONTADOR DENTRO DE FOR = "+contador);
}
console.log("contador fuera del for = "+contador);