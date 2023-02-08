var sobre = [
    {
    "titulo":"Missao",
    "texto":""
    },
    {
    "titulo": "Visao",
    "texto":""
    },
    {
    "titulo":"valor",
    "texto": ""
    }
]

var atual_sobre = 0;
var ant, fre;
document.getElementById("seta_sobre_anterior").onclick = function(){
    if(atual_sobre == 0){
      ant = sobre.length - 1;    
    }else{
       ant = atual_sobre - 1;
    }
    document.getElementById("sobre_titulo").innerHTML = "<h1>" + sobre[ant].titulo + "</h1>";
    document.getElementById("sobre_texto").innerHTML = "<p>"+sobre[ant].texto+"</p>";
    atual_sobre = ant;
}

document.getElementById("seta_sobre_frente").onclick = function(){
    if(atual_sobre == sobre.length - 1){
       fre =  0;    
    }else{
       fre = atual_sobre + 1;
    }
    document.getElementById("sobre_titulo").innerHTML = "<h1>"+sobre[fre].titulo + "</h1>";
    document.getElementById("sobre_texto").innerHTML = "<p>"+sobre[fre].texto +"</p>";
    atual_sobre = fre;
}

//
var servicos ={
    "<p>web designer</p>":"<p></p>",

    "<p>frontend</p>":"<p></p>",

    "<p>backend</p>":"<p></p>",
}

var unselected_color = "#646872";
var selected_color = "#2A2D34";

var titulo_servico = document.getElementsByClassName("titulo_servico");
for(var a = 0; a < titulo_servico.length; a ++){
    titulo_servico[a].onclick = function(){
        for(var b = 0; b < titulo_servico.length; b ++){
            titulo_servico[b].style["background-color"]= "";
            titulo_servico[b].style["color"] = "black"
            document.getElementById("texto_servicos").style["background-color"]= selected_color;
            document.getElementById("texto_servicos").style["color"]= "white";
            
        }
        this.style["background-color"]= selected_color;
        this.style["font-weight"]="bold";
        this.style["color"] = "white";
        
        var chave_selecionada = this.innerHTML;
        document.getElementById("texto_servicos").innerHTML = servicos[chave_selecionada]

    }
}

window.setInterval(function(){
    var horaAtual = new Date();
    var hora = horaAtual.getHours();
    var minuto = horaAtual.getMinutes();
    var segundos = horaAtual.getSeconds();

    function formatarHora(numbers){
        if(numbers>=0 && numbers <=9){ 
            var horaFormatada= numbers.toString();
            horaFormatada = "0"+ horaFormatada;
        
        }else{
            var horaFormatada = numbers.toString();
        }
        return horaFormatada;
    }

    document.getElementById("relogio").innerHTML = formatarHora(hora)+" : "+ formatarHora(minuto) + " : "+ formatarHora(segundos)
},1000);

document.getElementById("boasVindas").style.display="none";

document.getElementById("botaoLogin").onclick = function(){
    
    //salvar nome em localstorage
    var nome = document.getElementById("nomeUsuario").value;
    window.localStorage.setItem("nome", nome);
    //esconder sessao login
    document.getElementById("sessaoLogin").style.display="none";
    document.getElementById("boasVindas").style.display="initial";
    document.getElementById("boasVindasNomeLogin").innerHTML= "Ola "+ localStorage.nome;
    document.getElementById("naoEUsuario").innerHTML = "nao é "+ localStorage.nome +"?";
}
if(localStorage.nome){
    var nome = document.getElementById("nomeUsuario").value;
    window.localStorage.setItem("nome", nome);
    //esconder sessao login
    document.getElementById("sessaoLogin").style.display="none";
    document.getElementById("boasVindasNomeLogin").innerHTML= "Ola "+ localStorage.nome;
    document.getElementById("naoEUsuario").innerHTML = "nao é "+ localStorage.nome +"?";
}
document.getElementById("naoEUsuario").onclick = function(){
    localStorage.removeItem("nome");
    document.getElementById("boasVindas").style.display="none";
}





    document.getElementById("mostrar-loader").onclick = function(){

        document.getElementById("spinner-loader").style.display="initial";
        
        window.setTimeout(function(){
            document.getElementById("spinner-loader").style.display="none";
        },2000);
    }

