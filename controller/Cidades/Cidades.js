var select   = $("#select");
var template = Handlebars.compile($('#template').html());

var Cidade = function(dado){
  var that            = this;
  this.guid           = dado.guid;
  this.descricao      = dado.descricao;
  this.option         = this.Create();
}

Cidade.prototype.Create = function () {
  var option = document.createElement("option");
  select.append(option);
  option.outerHTML  = template(this);

  return select.lastElementChild;
};


$.ajax({
  url:  'http://54.218.78.130:8090/vagasemprego/api/handlerGetAll.php',
  crossDomain: true,
  type: 'POST',
  data: 'func=getAll',
  success: function(dados){
    $.each(dados, function(index, dado){
      var cidade    = new Cidade(dado);
    });
  }
});

$('select').on('change', function() {
  alert( this.value );
})
