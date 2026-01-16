document.getElementById("botaoEnviar").addEventListener("click", validaFomulario) 

function validaFomulario(){
    if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
   alert("Prontinho. Em breve você receberá as novidades por email.")
    }else{
    alert("Por favor, preencha seu nome e email corretamente para prosseguir.")
    }
}