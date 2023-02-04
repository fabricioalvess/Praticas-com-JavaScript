var sobre = [
    {
    "titulo":"Missao",
    "texto":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
    "titulo": "Visao",
    "texto":"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
    "titulo":"Valores",
    "texto":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
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
    "<p>web designer</p>":"<p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>",

    "<p>frontend</p>":"<p>tletters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a </p>",

    "<p>backend</p>":"<p>sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) </p>",
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
},1000)


