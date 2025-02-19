$.ajax({
    type: 'GET',
    url: 'https://swapi.dev/api/people/',
    success:function(response) {
      mostraDadosNaTela(response);
    }
});

var listaPersonagens=[];
var listaImagens=["../imagens/luke_the_hero.webp","../imagens/C3poBusto.jpg","../imagens/R2D2Busto.jpg","../imagens/dartvaderBusto.jpg","../imagens/LeiaOrgana.webp","../imagens/OwenLars.jpg","../imagens/BeruWhitesun.jpg","../imagens/R5D4.jpg","../imagens/BiggsDarklighter.webp","../imagens/Obiwankenobi.webp"]


function mostraDadosNaTela(response) {

  for(i=0; i<response.results.length; i++){
    listaPersonagens.push(response.results[i]);
  }
   criaCardPersonagens(listaPersonagens);
}

function criaCardPersonagens(lista){

  for(i=0; i<lista.length; i++){

    criaCardPersonagem(lista[i],listaImagens[i]);
  }
}
var elementoCards=$("#cards");
function criaCardPersonagem(personagem,imagem){
elementoCards.append(`<div class="col-sm-3">
<div class="card mx-auto my-4 bg-dark" style="width: 18rem;">
  <img src= ${imagem} class="card-img-top alturaCard" alt="...">
  <div class="card-body">
    <p class="card-text text-light text-center">${personagem.name}</p>
  </div>
</div> 
</div>`);
}