var lista   = $("#lista");
var listaTemplate = Handlebars.compile($('#listar').html());

var Vaga = function (dado){
  var that            = this;
  this.guid           = dado.guid;
  this.descricao      = dado.descricao;
  this.sexo           = dado.sexo;
  this.NS             = dado.NS;
  this.qtde           = dado.qtde;

  switch (this.sexo) {
    case '0':
    this.sexo = 'Masculino';
    break;

    case '1':
    this.sexo = 'Feminino';
    break;

    case '2':
    this.sexo = 'Indiferente';
    break;

  }

  switch (this.NS) {
    case '1':
    this.NS = 'Sim';
    break;

    case '0':
    this.NS =  'Não'
    break;
  }

  this.item   = this.Create();
}

Vaga.prototype.Create = function () {
  var item = document.createElement("li");
  lista.append(item);
  item.outerHTML  = listaTemplate(this);

  return lista.lastElementChild;
};

function getVagas(guidCidade, nomeCidade){
  lista.empty();
  myApp.showIndicator();
  $.ajax({
    url:  'http://54.218.78.130:8090/vagasemprego/api/handlerVagas.php',
    crossDomain: true,
    type: 'POST',
    data: 'crpt=d846076e2029fc6220155bc8a56d62f1'+'&guidcidade='+guidCidade,
    success: function(dados){
      console.log(dados);
      $.each(dados, function(index, dado){
        var vaga = new Vaga(dado);
      });
    }
  });
  myApp.hideIndicator();
}
