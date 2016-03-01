$(document).ready(function() {
	var gameState = {
		yourScore = 0,
		computerScore= 0,
		roundCount = 1
	}

		$(".push").on("click", function()

			var tagName = $(this).attr("data-tag");
			gameState[tagName]++;
			$("#" + tagName).html(gameState[tagName]);
	});

});