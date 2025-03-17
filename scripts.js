let memoria = null;
 
document.addEventListener("DOMContentLoaded", () => {
 
    document.getElementById("btnCalcular").addEventListener("click", calcular);
 
});
 
function calcular() {
 
    const num1 = parseFloat(document.getElementById("num1").value);
 
    const num2 = parseFloat(document.getElementById("num2").value);
 
    const operacion = document.getElementById("operacion").value;
 
    let resultado;
 
    if (operacion === "memoriaGuardar") {
 
        memoria = num1;
 
        resultado = "Número guardado en memoria: " + memoria;
 
    } else if (operacion === "memoriaUsar") {
 
        resultado = memoria !== null ? "Número en memoria: " + memoria : "No hay número guardado";
 
    } else if (operacion === "notacion") {
 
        if (isNaN(num1)) {
 
            resultado = "Ingrese un número válido";
 
        } else {
 
            resultado = num1.toExponential(2);
 
        }
 
    } else if (isNaN(num1) || isNaN(num2)) {
 
        resultado = "Ingrese números válidos";
 
    } else {
 
        switch (operacion) {
 
            case "suma":
 
                resultado = num1 + num2;
 
                break;
 
            case "resta":
 
                resultado = num1 - num2;
 
                break;
 
            case "multiplicacion":
 
                resultado = num1 * num2;
 
                break;
 
            case "division":
 
                resultado = num2 !== 0 ? num1 / num2 : "Error: División por 0";
 
                break;
 
            case "potencia":
 
                resultado = Math.pow(num1, num2);
 
                break;
 
            default:
 
                resultado = "Operación no válida.";
 
        }
 
    }
 
    document.getElementById("resultado").textContent = resultado;
 
}
 
 
 