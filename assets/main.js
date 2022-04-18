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
    /*
    document.getElementById('card2').style.display = "block";
    document.getElementById('card').style.display = "none";
    */
    if(document.getElementById("digit").value.length <= 0) {
        document.getElementById('card2').style.display = "none"; 
        document.getElementById('card').style.display = "block";
    } else {
        document.getElementById('card').style.display = "none";
        document.getElementById('card2').style.display = "block"; 
    }
};