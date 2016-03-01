$(document).ready(function(){
	var buttonChoices = ["rock", "paper", "scissor"];
	var userScore = 0,
	var computerScore = 0,
	var roundcound = 1,

	function computerChoice(){
			var randomIndex = Math.floor(Math.random() * buttonChoices.length);
			$(".push").html(buttonChoices[randomIndex]).attr("data-selection", random);
			return buttonChoices[randomIndex];
	};

	$(".push").on("click",function() {
		var computerChoice = computerChoice();
		var yourChoice = parseInt($(this).attr("data-selection"));

		if(computerChoice === yourChoice) {
			alert("You Tied with Computer. No Score!");
		} else if(computerChoice=== "rock"){
				if (yourChoice=== "rock") {
						alert("Draw, No Score!");
				}
		} else if(computerChoice==="scissor"){
				if (yourChoice=== "scissor") {
						alert("Draw, No Score!");
				}
		} else if(computerChoice==="paper"){
				if (yourChoice=== "paper") {
						alert("Draw, No Score!");
				}
		} else if(computerChoice==="paper"){
				if (yourChoice=== "rock") {
						alert("you win");
						userScore++;
					$("#userScore").html(userScore);	
				}
		} else if(computerChoice==="paper"){
				if (yourChoice=== "scissor") {
						alert("you win");
						userScore++;
						$("#userScore").html(userScore);
				}
		} else if(computerChoice==="scissor"){
				if (yourChoice=== "paper") {
						alert("computer wins");
						computerScore++;
						$("#computerScore").html(computerScore);
				}
		} else if(computerChoice==="rock"){
				if (yourChoice=== "paper") {
						alert("you win");
						userScore++;
						$("#userScore").html(userScore);
				};
		}
	});
});
