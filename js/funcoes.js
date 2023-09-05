$.ajax({
    type: 'GET',
    url: 'https://swapi.dev/api/people/',
    success:function(response) {
      mostraDadosNaTela(response);
    }
});

var listaPersonagens=[];


function mostraDadosNaTela(response) {

  for(i=0; i<response.results.length; i++){
    listaPersonagens.push(response.results[i]);
  }
   criaCardPersonagens(listaPersonagens);
}

function criaCardPersonagens(lista){

  for(i=0; i<lista.length; i++){

    criaCardPersonagem(lista[i]);
  }
}

function criaCardPersonagem(personagem){

  console.log("estou criando um pesonagem");
  console.log(personagem);
}