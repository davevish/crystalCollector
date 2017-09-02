//Create variables
//Randomly generate a number between 19 and 120
var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);

//Give each crystal a value between 1 and 12
var crystal1 = Math.floor(Math.random() * 11) + 1;
var crystal2 = Math.floor(Math.random() * 11) + 1;
var crystal3 = Math.floor(Math.random() * 11) + 1;
var crystal4 = Math.floor(Math.random() * 11) + 1;


$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);

var counter = 0;
$("#curScore").text(counter);

//Randomize the target number and the crystal values
//Set the Score to 0
function restartGame() {
	targetNumber = Math.floor(Math.random() * 101) + 19;
	$("#targetNumber").text(targetNumber);
	crystal1 = Math.floor(Math.random() * 11) + 1;
	crystal2 = Math.floor(Math.random() * 11) + 1;
	crystal3 = Math.floor(Math.random() * 11) + 1;
	crystal4 = Math.floor(Math.random() * 11) + 1;
	counter = 0;
	$("#curScore").text(counter);
}

//If the player wins, run the restart function, alert the user, and add 1 to the win count
function win() {
	alert("You win!");
	winCounter ++;
	$("#winCounter").text(winCounter);
	restartGame();
}

//If the player looses, run the restart function, alert the user, and add 1 to the loss count
function lose() {
	alert("You lose!");
	lossCounter ++;
	$("#lossCounter").text(lossCounter);
	restartGame();
}

$('#crystal1').on ('click', function(){
	counter = counter + crystal1;
	$('#curScore').text(counter);
		if (counter == targetNumber){
			win();
		}
		else if (counter > targetNumber){
			lose();
		}   
});  

$('#crystal2').on ('click', function(){
	counter = counter + crystal2;
	$('#curScore').text(counter); 
		if (counter == targetNumber){
			win();
		}
		else if (counter > targetNumber){
			lose();
		}   
});  

$('#crystal3').on ('click', function(){
	counter = counter + crystal3;
	$('#curScore').text(counter); 
		if (counter == targetNumber){
			win();
		}
		else if (counter > targetNumber){
			lose();
		}   
});  

$('#crystal4').on ('click', function(){
	counter = counter + crystal4;
	$('#curScore').text(counter);
		if (counter == targetNumber){
			win();
		}
		else if (counter > targetNumber){
			lose();
		}   
});