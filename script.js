

// menu_oculto

document.getElementById("abrirMenu").onclick = function(){
  var abrirMenu = document.getElementById("menu_oculto");
  abrirMenu.style.right = "0px"; 
  abrirMenu.style.transition = "right 1s"; 

}
fechar_menu_estilizacao

document.getElementById("fechar_menu_estilizacao").onclick = function(){
  var fecharMenu = document.getElementById("menu_oculto");
  fecharMenu.style.right = "-500px"; 
  abrirMenu.style.transition = "left 1s"; 
}


























//tituloSobre texto

var sobre = 
    {
        '<p>missao</p>': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo amet quia fugit aliquam totam magni est. Hic nemo pariatur doloremque dicta officiis repudiandae minus voluptatem repellat cumque! Asperiores, aut fuga. ',
   
        '<p>visao</p>': 'Mais uma noite como todas as anteriores. Pego minha caneca de café cheia, acendo meu ultimo cigarro e corro pra velha janela do quarto. Observo a noite fria e chuvosa, até parece confortável por um momento, se não fossem as dezenas de preocupações que me desmotivam a cada dia.',
    
        '<p>valores</p>':'Penso em você, mesmo sabendo o quão longe está de mim, sinto aquele amor que continua a me desgraçar intensamente a cada dia, e penso quando enfim poderei te ter comigo. Sei lá, o café chega ao fim e trago a ultima ponta, nada muda '
    }

//console.log(sobre[a])
var tituloSobre = document.getElementsByClassName("tituloSobre");

for(var a = 0; a < tituloSobre.length; a ++){

    tituloSobre[a].onclick = function(){

        for(var b = 0;b < tituloSobre.length; b ++){
            tituloSobre[b].style["background-color"] = ""
        }

        this.style["background-color"]= "rgb(172, 150, 172)";
        
        var cont = this.innerHTML;
        document.getElementById("texto").innerHTML = "<p>"+sobre[cont]+"</p>";
       
    }
    
}

//----------------------------------------------------------------------------------------------------

var our_services = [
    {
      'title': 'Webdesign',
      'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
    },
  
    {
      'title': 'Branding',
      'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
    },
  
    {
      'title': 'Marketing Digital',
      'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
    }
    
  ];

  // botaoVoltar botaoProsseguir   tituloServico textoServicos

  var servico_atual = 0;
  document.getElementById("botaoVoltar").onclick = function(){

    if(servico_atual == 0){
        var servico_anterior = our_services.length -1;
    }else{
        servico_anterior = servico_atual - 1;
    }

    document.getElementById("tituloServico").innerHTML = our_services[servico_anterior].title;
    document.getElementById("textoServicos").innerHTML = our_services[servico_anterior].text;
    servico_atual = servico_anterior;

  }
  document.getElementById("botaoProsseguir").onclick = function(){

    if(servico_atual == our_services.length -1){
        var servico_prosseguir = 0;
    }else{
        servico_prosseguir = servico_atual +1;
    }

    document.getElementById("tituloServico").innerHTML = our_services[servico_prosseguir].title;
    document.getElementById("textoServicos").innerHTML = our_services[servico_prosseguir].text;
    servico_atual = servico_prosseguir;

  }
