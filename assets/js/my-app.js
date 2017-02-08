// Initialize your app
var myApp = new Framework7({material: true});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

function getEndereco(){
  var endereco  = $('#endereco').text();

  myApp.alert(endereco, ['Compareça neste endereço']);
}
