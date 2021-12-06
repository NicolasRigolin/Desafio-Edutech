function verifica() {
	//var i vai cair no switch e passar case por case para fazer o check.
	var i = 1;
	switch(i){
		case 1:{
			if (document.forms[0].email.value.length == 0) {
				//irá mostrar o alert
		   	alert("Por favor, informe o seu EMAIL.");
		   	//irá dar foco ao input do email.
			document.frmEnvia.email.focus();
		    return false;
		  	}
		  	return true;
		}break;
		case 2:{
	  		if (document.forms[0].nome.value.length == 0) {
		   	alert("Por favor, informe o seu NOME.");
			document.frmEnvia.nome.focus();
		    return false;
		  	}
		  	return true;
		}break;

		case 3:{
			if (document.forms[0].telefone.value.length == 0) {
		   	alert("Por favor, informe o seu TELEFONE.");
			document.frmEnvia.telefone.focus();
		    return false;
		  	}
		  	return true;
		}break;
	}
	i++;

}

//confirmação se o email está realmente correto
function checarEmail(){
if( document.forms[0].email.value=="" 
   || document.forms[0].email.value.indexOf('@')==-1 
     || document.forms[0].email.value.indexOf('.')==-1 )
	{
	   alert( "Por favor, digite um E-MAIL válido!" );
	   return false;
}

// OBS: esse código está incompleto mas espero ter passado o conceito de 
// como teria que ter ficado (sou ruim no javascript eu admito).