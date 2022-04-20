//Função para exibir o texto
window.oninput = function(){
    document.querySelector('#show').value = document.querySelector('#digit').value;
};
//Função para copiar o texto
document.getElementById("btn3").addEventListener("click",function(){
    document.getElementById("show").select();
    document.execCommand('copy');
});
//Função esconder div
function escondeDiv() {
    if(document.getElementById("digit").value.length <= 0) {
        document.getElementById('card2').style.display = "none"; 
        document.getElementById('card').style.display = "block";
    } else {
        document.getElementById('card').style.display = "none";
        document.getElementById('card2').style.display = "block"; 
    }
};
//Variaveis necessárias
var letras = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["a", "ai"],
    ["u", "ufat"],
];
//Função codificar
function encripta(texto) {
letras.forEach((element) => {
    var textoSearch = element[0];
    var textoReplace = element[1];
    texto = texto.replaceAll(textoSearch, textoReplace);
});
return texto;
}
//Função decodificar
function desencripta(texto) {
 letras.forEach((element) => {
    var textoSearch = element[1];
    var textoReplace = element[0];
    texto = texto.replaceAll(textoSearch, textoReplace);
 });
 return texto;
}
//Botão de encriptar
document.getElementById("btn_descript").addEventListener("click", function() {
    var textoNormal = document.getElementById("digit").value;
        if(!entradaValida(textoNormal)){
            return;
        }
    var textoDecodificado = desencripta(textoNormal);
    document.getElementById("show").value = textoDecodificado;
});
//Botão de desencriptar
document.getElementById("btn_cript").addEventListener("click", function() {
    var textoCodificado = document.getElementById("digit").value;
        if(!entradaValida(textoCodificado)) {
            return;
        }
    var textoDecodificado = encripta(textoCodificado);
    document.getElementById("show").value = textoDecodificado;
});
//Função para ser validado as regras
function entradaValida(texto){
    if(texto === ""){
        alert("Digite alguma coisa!!");
        return false;
    }
        if(texto.toLowerCase() != texto){
            alert("Só pode usar letras minusculas!");
            return false;
        }
    const carecteresAcentudados = "ÁÉÍÓÚáéíóúâêîôûàèìòùÇç";
    var carecteresAcentos = carecteresAcentudados.split("");

        carecteresAcentos.forEach(function (carectere){
            if(texto.includes(carectere)) {
                alert("Não pode usar acentos!");
                return false;
            }
        });
        return true;
}
