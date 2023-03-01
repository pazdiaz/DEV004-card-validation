const validator = {
  isValid(creditCardNumber) {
    let process = creditCardNumber.trim() //">numero" //.trim elimina los espacios en blanco de ambos extremos de una cadena
    console.log(process)
    if (process.length === 0) {
      return false
    }
    let arrayNUmeroTarjeta = process.split("") //dividir array

    let nuevoArrayInvertido = arrayNUmeroTarjeta.reverse(); // invertir

    let arrayPar = nuevoArrayInvertido.filter(function (x, y) {  //numeros pares
      if (y % 2 === 1) return x;
    });

    let arrayImpar = nuevoArrayInvertido.filter(function (x, y) { //numeros impares
      if (y % 2 === 0) return x;
    });
    console.log("arrayPar", arrayPar)
    console.log("arrayImpar", arrayImpar)

    let arrayplus = arrayPar.map(function (parmulti) {
      let multiplicar = parmulti * 2;
      console.log(multiplicar);

      if (multiplicar >= 10) {
        let diezmayor = multiplicar.toString().split("").map(Number); //se convierte en string para split

        let arraytres = diezmayor.reduce(function (x, z) {  //.reduce sumamos 
          return x + z;
        });

        return arraytres; //ojo (suma)
      }
      else { return multiplicar } //ojo
    });
    arrayImpar = arrayImpar.map(Number)

    let sumaplus = arrayplus.reduce(function (x, y) {
      return x + y //(Number o parseInt())
    }) //cosolar 
    let sumaImpar = arrayImpar.reduce(function (x, z) {
      return x + z;
    })//cosolar
    let resultado = sumaplus + sumaImpar;
    //cosolar 
    if (resultado % 10 == 0) {
      return true;
    } else {
      return false;
    }


  },
  //funcion de maskify
  maskify(numero) {
    numero = numero.toString()
   let acumulador = ""
    for (let i = 0; i < numero.length; i++) {
      if (i < numero.length - 4) {
        acumulador = acumulador + numero [i]
      } else {
        acumulador = acumulador + "#"
      }
    }
    return acumulador
  }
};
     
     
export default validator;

