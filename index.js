
/* se define  la  funcion import  para  traer el objeto validator a index  para ser  usado*/ 
import Validator from './validator.js';

//console.log(isValid('4137894711755903'));
//Es la variable donde  se  guardara el numero de la  tarjeta  sin maskify , tiene  que partir vacio.
let numberCardAux = [];
// Se exporta  la funcion  para ser  llamado desde  el DOM
window.updateCardnumber = updateCardnumber;

// Esta  funcion permite  actualizar  el numero de  tarjeta  cuando  se  deja  presionado el boton de  borrado (sin descando). POP  elimina  el ultimo elemento de  Array
export function updateCardnumber(event){
	//se detecta la tecla de borrado
	
	if(event.keyCode == 8){
		let validator = new Validator();
		let numberCardValue = document.getElementById('numberCard').value;
		numberCardAux.pop(numberCardValue[numberCardValue.length-1]);
		document.getElementById('numberCard').value= validator.maskify(numberCardValue);
		document.getElementById('numberCardAux').value=numberCardAux.join('');
		
	}
}

window.validateCard = validateCard;
// Aqui  se  realiza  el proceso de  validacion de  la  tarjeta para  ver si el numero es  valido
export function validateCard(){
	let numberCard = document.getElementById('numberCardAux').value;
	let validator = new Validator();
	numberCard=numberCard+'';
	//Valida campo de tarjeta de credito no este vacia.
	if(numberCard==''){ 
		alert ("Debe ingresar el numero de su tarjeta")
		return; 
    //determina el numero de caracteres de la tarjeta
	}else if (numberCard.length==16) {
		console.log(numberCard);
		if(validator.isValid(numberCard)==true){
			alert('Tarjeta valida');
		}else{
			alert("Tarjeta no valida");
		}
	

	}else {
		alert ("la cantidad de numeros de su tarjeta debe ser  igual a 16")
		return;
	}
	
	
	
}

window.maskify = maskify;

/* se define  la  funcion para que  se enmascare el numero de  tarjeta  y se  guarde  el numero de  tarjeta  original  en una  variable auxiliar */ 
export function maskify(event) {
	
	
	let validator = new Validator();
	let numberCardValue = document.getElementById('numberCard').value; 
	// if  valida  que  el caracter sea  numero  y que   el numero  auxiliar  no pase  los  16 caracteres 
	if(event.keyCode >= 48 && event.keyCode <= 57 && numberCardAux.length < 16){
		numberCardAux.push(numberCardValue[numberCardValue.length-1]);
		document.getElementById('numberCard').value= validator.maskify(numberCardValue);
		document.getElementById('numberCardAux').value=numberCardAux.join('');
		//se detecta la tecla de borrado
	}else if(event.keyCode == 8){
		numberCardAux.pop(numberCardValue[numberCardValue.length-1]);
		document.getElementById('numberCard').value= validator.maskify(numberCardValue);
		document.getElementById('numberCardAux').value=numberCardAux.join('');
	}
	return true;
}
