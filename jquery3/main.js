/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***

=======================================================
*/
$(document).ready(function() {



// Question #1
$('.changeColor').click(function(){
  console.log('clicked');
  $('ul li:nth-child(3)').css('color', '#8A2BE2');
})
// Question #2
// $('ul li:nth-child(4)').on('click',function(){
//   console.log('defitely clicked');
//   $(this).append('<li>Added another beneath 4</li>');
// })
$('ul li:nth-child(4)').click(function(){
  $(this).append('<li>Added another beneath 4</li>');
})

// Question #3
$('#removeLi').click(function(){
  $('ul li:nth-child(2)').remove();
})

// Question #4
$('ul li:nth-child(5)').click(function(){
  //$(this).show();
  $(this).css('font-size', '40px');
  $('li').not(this).hide();
})

// Question #5
$('.cute').click(function(){
  console.log('clicked');
  $('<img src=images/puppy.jpg>').appendTo('.clones');
})

  // Question #6
$(document).dblclick(function(){
  console.log('dbl clicked');
  $('#makeSquare').css({'height':'300px'});
})


// Question #7
$('.black.swatch').on('click',function(){
  console.log('clicked');
  //$('body').css('backgroundColor','.swatches.after > .black.swatch');
  //$('body').css('background','black');
  $('body').addClass("black");
})

$('.wood.swatch').on('click',function(){
  console.log('clicked');
  $('body').addClass('wood');
})

$('.chaos.swatch').on('click',function(){
  console.log('clicked');
  $('body').addClass('chaos');
})
$('.restore.swatch').on('click',function(){
  $('body').removeClass();
})
  // Question #8
$('#hover').hover(function(){
  console.log('hovering');
  $(this).css('background-color', '#ff0000');
  $(this).on('click', function(){
    $(this).addClass('green');
    $(this).on('click',function(){
      $(this).removeClass('green');
    })
  })
})
});
