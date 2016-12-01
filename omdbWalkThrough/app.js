$(document).ready(function(){
  $('h1').text('Goodbye');
  $('button').on('click',function(){
    var input1 = $('#anInput').val();
    alert(input1);
  })



});
