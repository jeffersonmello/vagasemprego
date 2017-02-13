var div             = $("#anuncio");
var anuncioTemplate = Handlebars.compile($('#anuncioTemplate').html());

var Anuncio = function(dado){
  this.imagem  = dado.imagem;
  this.img     = this.Create();
}

Anuncio.prototype.Create = function () {
  var img = document.createElement("img");
  div.append(img);
  img.outerHTML  = anuncioTemplate(this);

  return img.lastElementChild;
};


$.ajax({
  url:  'http://54.218.78.130:8090/vagasemprego/api/handlerAnuncio.php',
  type: 'POST',
  success: function(dados){
    dado = dados[Math.floor(Math.random()*dados.length)];
    var anuncio = new Anuncio(dado);
  },error: function (jqXHR, exception) {
    console.log(jqXHR);
    console.log(exception);
    myApp.alert('Sem conexão com a internet', ['ERRO']);
  }
});
