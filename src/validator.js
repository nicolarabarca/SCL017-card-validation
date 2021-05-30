/*Se define el  objeto con nombre Validator se asigna  primera  metodo con  nombre isValid donde se validara el numero de  tarjeta 
mediante el algoritmo de luhn.

Habra   una segunda  metodo que permitira  encubrir el  numero de  tarjeta dejando  a  la  vista solo los  ultimos  digitos */


// esta funcion  sirve  para  el objeto quede disponible para cualquier  archivo  en el proyecto
export default class Validator {

    constructor() {
    }
    // isValid y Maskify pasan a ser  metodos.
  
    isValid(creditCardNumber) {
      let answer = false; // Mientras no ocurra  lo de  abajo  siempre sera false o tarjeta  no  valida
  
      //  se define array para dividir el numero de la tarjeta en digitos independientes (array) para eso sirve la funcion split*
      let creditCardnumberArray = creditCardNumber.split('');
      // es una variable auxiliar que permite realizar operaciones sobre los numeros de la tarjeta de credito
      let resultArray = Array();
      //  variable auxiliar que permite calcular el doble del numero y cuando es mayor a 10
      let plusResult;
      for (let index = 0; index < creditCardnumberArray.length; index++) {
        //  Se pregunta si el numero es 0 o par
        if (index == 0 || index % 2 == 0) {
          // aqui se dobla el numero que se encuentra en la pisicion par , parseint transforma de string a numero
          plusResult = parseInt(creditCardnumberArray[index]) + parseInt(creditCardnumberArray[index]);
          if (plusResult >= 10) {
            // Se define  la variable para sumar los digitos de los espacios pares que sean igual o mayores a 10
             
            let plusResultArray = (plusResult + '').split('');
            /*  cuando el numero ess mayor o igual a diez separa digito y se suma parsein transforma de  string a numero*/
            plusResult = parseInt(plusResultArray[0]) + parseInt(plusResultArray[1]);
  
          }
          resultArray.push(plusResult + '');
  
  
        } else {
          /*Aqui se incluyen los numeros que se encuentran en las casillas impares*/
          resultArray.push(creditCardnumberArray[index]);
  
  
        }
  
      }
  
      // se define  la variable que suma  los  numeros  de cada casilla . Se coloca la palabra index entre [ para que recorra el array de digitos
      let plusNumber = 0;
      for (let index = 0; index < resultArray.length; index++) {
        plusNumber = plusNumber + parseInt(resultArray[index]);
  
  
      }
  
      //Aqui se incluyen los numeros que se encuentran en las casillas impares
      let resultEndarray = (plusNumber + '').split('');
      if (parseInt(resultEndarray[resultEndarray.length - 1]) == 0) {
        answer = true;
  }
  
      return answer;
    }
  
    maskify(creditCardNumber) {	
  
      creditCardNumber = creditCardNumber.split ("");
      for(let i= 0; i< creditCardNumber.length -4; i++ ){
        creditCardNumber[i]= '#';
      }
      creditCardNumber = creditCardNumber.join ("");
      return creditCardNumber;
      }
  
  }
    
  
 