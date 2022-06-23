add.addEventListener("click", adicionar);

function adicionar() {
    var x = document.getElementById("lista").innerHTML + document.getElementById("newtodo").value; //junta o que já existe na lista com o input novo
    var y = '; <br>'; //formatação próx. linha
        x = x+y; //concatena as strings
    document.getElementById("lista").innerHTML = x; //incorpora a lista nova no lugar
    document.getElementById("newtodo").value = ''; //limpa a caixa de texto

    var addchk = '<input type="checkbox"><br>'; //formatação nova checkbox e linha
    var check = document.getElementById("caixa").innerHTML + addchk; //concatena strings
    document.getElementById("caixa").innerHTML = check;
}    
