function verificaImparPar(){    
    let numeroDigitado = parseInt(document.getElementById("idCampo").value);
    if(numeroDigitado % 2 == 0){
        document.getElementById("idParidade").value = "Numero é par"
    }else{
        document.getElementById("idParidade").value = "Numero é impar"
    }
}