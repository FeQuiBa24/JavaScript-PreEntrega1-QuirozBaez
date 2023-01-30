while(true){
    var alquiler = parseFloat(prompt("Ingrese el valor de su alquiler:"));
    if(!isNaN(alquiler) && alquiler != null){
        break;
    }
    else{
        alert("El valor ingresado no es número.");
        continue;
    }
}
const sum = (a,b)=>a+b;
const mult = (a,b)=>a*b;
const calcularIndice = (a,b)=>(a/b)-1;
var indice = calcularIndice(3.29,1.77);
var aumento = mult(alquiler, indice);
alquiler = sum(mult(alquiler, indice),alquiler);
document.write("<h3>El indice de aumento es "+ indice.toFixed(2) +"</h3>");
document.write("<h3>El valor del aumento es"+ aumento.toFixed(2) +"</h3>");
document.write("<h3>El valor de su alquiler aumentará a "+ alquiler.toFixed(2) +"</h3>");
