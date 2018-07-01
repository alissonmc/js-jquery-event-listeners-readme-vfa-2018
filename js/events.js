function getIt(){
  $('p').on("click", function(){
    alert("Hey!");
});
}

$(document).ready(function(){

  +function pressIt(){
  +$("form").on('keydown', function(key) {
  +  if(key.which == 71){
  +      alert('G was pressed');
  +  }
  +});
  +}

});
