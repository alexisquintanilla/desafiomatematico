
// ejercicio matematico
let inputUser = parseInt(prompt("Ingrese un Numero del 1 al 20"));

let resultado = 1

const faltorial = (num) => {
    let resultado = 1
    for (i = 1; i <= num; i++) {
        resultado *= i
        console.log(`El faltorial de ${i} es : ${resultado} `)
    } return resultado;
}

const multi = (num) => {
    for (i = 1; i <= num; i++) {
        resultado = i * num
        console.log(`${i} x ${num} = ${resultado}`)
    } return resultado
}


if (inputUser >= 1 && inputUser <= 20) {
    multi(inputUser)
} if (inputUser >= 1 && inputUser <= 20) {
    faltorial(inputUser)
} else {
    console.log("Numero fuera de rango")
}


