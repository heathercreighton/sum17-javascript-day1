var rock = false;
var paper = false;
var scissors = false;



$('#rock').click(function(){
	 $(this).css('border-color','black')
	 $('#paper').css('border-color','beige')
	 $('#scissors').css('border-color','beige')
		game("rock");
		



});

$('#paper').click(function(){
	 $(this).css('border-color','black')
	 $('#rock').css('border-color','beige')
	 $('#scissors').css('border-color','beige')
		

		game("paper");

});

$('#scissors').click(function(){
	 $(this).css('border-color','black')
	 $('#rock').css('border-color','beige')
	 $('#paper').css('border-color','beige')
		
	game("scissors");

});


function game(choice){

	var computer = Math.random();

	if (computer <=0.33){

		if (choice == "rock"){
			$('#result').html("Computer chose rock!  It's a tie!");
		// alert("Computer chose rock!  It's a tie!");
			}
		else if(choice == "paper"){
			$('#result').html("Computer chose rock!  You win!");
			// alert("Computer chose rock!  You win!");
			}
		else{
			$('#result').html("Computer chose rock!  You lose.");
			// alert("Computer chose rock!  You lose.");
		}
	      }	
	else if ( 0.34 >= computer >= 0.66){
			if (choice == "rock"){
			$('#result').html("Computer chose paper!  You lose!");
		// alert("Computer chose paper!  You lose!");
			}
		else if(choice == "paper"){
			$('#result').html("Computer chose paper!  It's a tie!");
			// alert("Computer chosepaper!  It's a tie!");
			}
		else{
			$('#result').html("Computer chose paper!  You win!!");
			// alert("Computer chose paper!  You win!");
			}	
		}

	else {if (choice == "rock"){
		$('#result').html("Computer chose scissors! You win!");
		// alert("Computer chose scissors!  You win!");
			}
		else if(choice == "paper"){
			$('#result').html("Computer chose scissors!  You lose!");
			// alert("Computer chose scissors!  It's a lose!");
			}
		else{
			$('#result').html("Computer chose scissors!  It's a tie!");
			// alert("Computer chose scissors!  It's a tie!");
			}	

	}






}

