
/* se define  la  funcion import  para  traer el objeto validator a index  para ser  usado*/ 
import Validator from './validator.js';

//console.log(isValid('4137894711755903'));

window.validateCard = validateCard;

export function validateCard(){
	let numberCard = document.getElementById('numberCard').value;
	let validator = new Validator();
	numberCard=numberCard+'';
	//Valida campode tarjeta de credito no este vacia.
	if(numberCard==''){ 
		alert ("Debe ingresar el numero de su tarjeta")
		return; 
    //determina el numero de caracteres de la tarjeta
	}else if (numberCard.length==16) {
		console.log(numberCard);
	alert(validator.isValid(numberCard))

	}else {
		alert ("la cantidad de numeros de su tarjeta debe ser  igual a 16")
		return;
	}
	
	
	
}

window.maskify = maskify;

/* se define  la  funcion para que solo permita  ingresar caracteres numericos en  los campos CVV y Numero de  tarjeta*/ 
export function maskify() {
	
	let validator = new Validator();
	let numberCardValue = document.getElementById('numberCard').value;
	console.log('maskify');
	console.log(numberCardValue);
	document.getElementById('numberCard').value= validator.maskify(numberCardValue);
	return true;
}

/*
function validateNumbers(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;
	}

	
	
	function maskify (cc) {	
		if (cc.length < 4){	
			return cc

			} else {
				let last4= ' '
				for (let i=cc.length -4 ; i < cc.length; i++) {
					last4 += cc[i] 
					}
              let mask= ''
			  for (let j=0;j < cc.cclength -4; j++) { 
                mask += '#'
			  }
               return mask + last4
			   }
			
	}

	function maskify (cc){ 
		return cc.slice (0. -4).replace(/./g, '#') + cc.slice(.4 );
	  }

	  function maskify(cc) { 
	 return cc.replace (/,(?=....)/g, '#');
	   }
	   function maskify(cc) { 
       cc = cc.split ("");
	   for(var i= 0; i< cc.length -4; i++ ){
		   cc[i]= '#';
	   }
	   cc = cc.join ("");
	   return cc
	}

*/
	