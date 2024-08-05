function roll(){
    let numero = prompt("digite um numero"); 
    document.write("<select multiple style='height:200px'>");
    for(let n1 = 0; n1<= numero; n1++){
        if(n1 % 2 == 0 ){
            document.write("<option>" + n1 + " é par" + "</option>");
        }else if (n1 % 2 != 0 ){
            document.write("<option>" + n1 + " é impar" + "</option>");
        }
    }
    document.write("</select>");
}