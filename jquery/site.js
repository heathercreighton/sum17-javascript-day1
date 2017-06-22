// $('#circle').click(function(){
// 	alert('Clicked!');

// });

// $('#circle').hover(function(){
// 	$('p').html("We've change to another cool sentence!");

// });

var input = prompt("Type 'yes' ")

if (input == 'yes'){
$('#circle').hover(function(){
	$('img').attr("src", "smiley.jpeg");

});}

$('.square').click(function(){
	$(this).css("background", "blue");

})

$('.square').hover(function(){
	$(this).css("width", "400px");

})

$(function() {
  $('#draggable').draggable();
  })

$(function() {
  $('#circle').draggable();
  })

$(function() {
  $('#square1').resizable();
  })


$(function(){
	$('#sortable').sortable();
})
