import validator from './validator.js';
document.getElementById("btn").addEventListener("click", function (e) { //funcion boton validar//
    e.preventDefault()
    const inpunt = document.getElementById("inputNumero") //input es getElementById
    const result = document.getElementById("result");
    const valid = validator.isValid(inpunt.value) 
    const mascara = validator.maskify(inpunt.value)
    console.log(mascara);
    if (valid) {
        result.innerHTML = "Su tarjeta " + mascara + " es Valida"  //resultado html
        //exitoso
        inpunt.value = "";
    }
    else {
        result.innerHTML = "Su tarjeta " + mascara + " es invalida, vuelva a intentarlo" //resultado html
        //error
        inpunt.value = "";
    }
})

console.log(validator);
