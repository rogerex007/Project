var arreglo = [];
var max = 100, min = 100;

// Llenando el array con numeros aleatorios
for (let i = 0; i < 100; i++) {
    let num = Math.random() * (max - (-min)) + (-min); 
    arreglo[i] = Math.floor(num)
}



console.log(arreglo)

// Combinaciones de tripletas cuya suma = 0
for (let i = 0; i < arreglo.length; i++) {
    for (let j = i+1; j < arreglo.length; j++) {
        for (let k = j+1; k < arreglo.length; k++) {
            if (arreglo[i] + arreglo[j] + arreglo[k] === 0) {
                console.log("{",arreglo[i],",", arreglo[j],",", arreglo[k],"}")
            }
        }
    }
}
