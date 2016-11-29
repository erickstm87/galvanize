$(document).ready(function(){

//#1
$('#submitBtn').click(function(){
  var x = $("#textInput").val();
  console.log(x);
  $(`<h3>${x}</h3>`).insertAfter('#submitBtn');
})

//#2
$('.chex').click(function(){
  console.log('clicked');
  $('h2').toggleClass('hidden');
})

//#3
$('.table.table-striped').append('<tr><td>Cat Stevens</td><td>40</td><td>Always</td></tr');

//#4
$('.table.table-striped tr td').each(function(){
  if($(this).text() === 'Content'){
    $(this).css('color', 'green');
  }
  else if($(this).text() === 'Hangry'){
    $(this).css('color', 'red');
  }
})

//#5
$('.btn.btn-warning').on('click', function(){
  $('.table.table-striped tr td').each(function(){
    if($(this).text() < 10){
      $(this).parents('tr').hide();
    }
  })
})

//#6
$('.btn.btn-success').on('click', function(){
  $('.table.table-striped tr td:first-child').each(function(){
    var x = $(this).text().toUpperCase();
    //x = x.toUpperCase();
    $(this).replaceWith(x);
  })
})

//#7
$('.btn.btn-primary').on('click', function(){
  $('.table.table-striped').toggleClass('hidden');
})

//#8
//$('#disableUs:nth-child(1)').prop('disabled', true);
$('input.should').prop('disabled', true);

$('input.cheating').prop('disabled', true);

$('a').click(function(event){
  console.log('clicked');
  event.preventDefault();
});

//#9
$('.dropdown').find('.dropdown:nth-child(2)').click(function(){
  console.log('hello');
  $(this).insertAfter('.dropdown');
});
})
