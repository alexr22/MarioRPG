var mario = {
	name: "Mario",
	healthPoints: 80,
	attackPower: 3,
	counterAttackPower: 10
};

var luigi = {
	name: "Luigi",
	healthPoints: 60,
	attackPower: 5,
	counterAttackPower: 10
};

var yoshi = {
	name: "Yoshi",
	healthPoints: 100,
	attackPower: 3,
	counterAttackPower: 4
};

var toad = {
	name: "Toad",
	healthPoints: 70,
	attackPower: 7,
	counterAttackPower: 4
};
var userCharacter = false;
var opponentCharacter1 = false;
var opponentCharacter2 = false;
var opponentCharacter3 = false;
var counter = 0; 


//assigning characters' buttons to make them be somebody
$(".marioButton").on("click", function(){
    if (opponentCharacter2 != false) {
    	$(".mario").appendTo(".opponentCharacter3");
    	opponentCharacter3 = mario;
    	$(".oppCharHP").html("Computer HP: " + opponentCharacter3.healthPoints);
    }else if (opponentCharacter1 != false) {
    	$(".mario").appendTo(".opponentCharacter2");
    	opponentCharacter2 = mario;
    	$(".oppCharHP").html("Computer HP: " + opponentCharacter2.healthPoints);
    	$("#pickCharacter").html("<h2>Pick your final opponent!</h2>");
    }else if (userCharacter != false) {
    	$(".mario").appendTo(".opponentCharacter1");
    	opponentCharacter1 = mario;
    	$("#pickCharacter").html("<h2>Pick your 2nd opponent!</h2>");
    	$(".oppCharHP").html("Computer HP: " + opponentCharacter1.healthPoints);
    }else if (userCharacter == false) {
	 	$(".mario").appendTo(".userCharacter");
	 	userCharacter = mario;
	 	$("#pickCharacter").html("<h2>Pick your 1st opponent!</h2>");
	 	$(".userCharHP").html("Your HP: " + userCharacter.healthPoints);
  }  
})
//if user picks luigi
$(".luigiButton").on("click", function(){
    if (opponentCharacter2 != false) {
    	$(".luigi").appendTo(".opponentCharacter3");
    	opponentCharacter3 = luigi;
    	$(".oppCharHP").html("Computer HP: " + opponentCharacter3.healthPoints); 	
    }else if (opponentCharacter1 != false) {
    	$(".luigi").appendTo(".opponentCharacter2");
    	opponentCharacter2 = luigi;
    	$(".oppCharHP").html("Computer HP: " + opponentCharacter2.healthPoints);
    	$("#pickCharacter").html("<h2>Pick your final opponent!</h2>")
    }else if (userCharacter != false) {
    	$(".luigi").appendTo(".opponentCharacter1");
    	opponentCharacter1 = luigi;
    	$(".oppCharHP").html("Computer HP: " + opponentCharacter1.healthPoints);
    	$("#pickCharacter").html("<h2>Pick your 2nd opponent!</h2>");
    }else if (userCharacter == false) {
	 	$(".luigi").appendTo(".userCharacter");
	 	userCharacter = luigi;
	 	$("#pickCharacter").html("<h2>Pick your 1st opponent!</h2>");
	 	$(".userCharHP").html("Your HP: " + userCharacter.healthPoints);
  }  
})
//if user picks yoshi
$(".yoshiButton").on("click", function(){
    if (opponentCharacter2 != false) {
    	$(".yoshi").appendTo(".opponentCharacter3");
    	opponentCharacter3 = yoshi;	
    	$(".oppCharHP").html("Computer HP: " + opponentCharacter3.healthPoints);
    }else if (opponentCharacter1 != false) {
    	$(".yoshi").appendTo(".opponentCharacter2");
    	opponentCharacter2 = yoshi;
    	$("#pickCharacter").html("<h2>Pick your final opponent!</h2>");
    	$(".oppCharHP").html("Computer HP: " + opponentCharacter2.healthPoints);
    }else if (userCharacter != false) {
    	$(".yoshi").appendTo(".opponentCharacter1");
    	opponentCharacter1 = yoshi;
    	$("#pickCharacter").html("<h2>Pick your 2nd opponent!</h2>");
    	$(".oppCharHP").html("Computer HP: " + opponentCharacter1.healthPoints);
    }else if (userCharacter == false) {
	 	$(".yoshi").appendTo(".userCharacter");
	 	userCharacter = yoshi;
	 	$("#pickCharacter").html("<h2>Pick your 1st opponent!</h2>")
	 	$(".userCharHP").html("Your HP: " + userCharacter.healthPoints);


  }  
})
//if user picks toad
$(".toadButton").on("click", function(){
    if (opponentCharacter2 != false) {
    	$(".toad").appendTo(".opponentCharacter3");
    	opponentCharacter3 = toad; 	
    	$(".oppCharHP").html("Computer HP: " + opponentCharacter3.healthPoints);
    }else if (opponentCharacter1 != false) {
    	$(".toad").appendTo(".opponentCharacter2");
    	opponentCharacter2 = toad;
    	$("#pickCharacter").html("<h2>Pick your final opponent!</h2>");
    	$(".oppCharHP").html("Computer HP: " + opponentCharacter2.healthPoints);
    }else if (userCharacter != false) {
    	$(".toad").appendTo(".opponentCharacter1");
    	opponentCharacter1 = toad;
    	$("#pickCharacter").html("<h2>Pick your 2nd opponent!</h2>");
    	$(".oppCharHP").html("Computer HP: " + opponentCharacter1.healthPoints);
    }else if (userCharacter == false) {
	 	$(".toad").appendTo(".userCharacter");
	 	userCharacter = toad;
	 	$("#pickCharacter").html("<h2>Pick your 1st opponent!</h2>")
	 	$(".userCharHP").html("Your HP: " + userCharacter.healthPoints);
  }  
})
//making attack button work
$(".attackButton").on("click", function(){
		if (opponentCharacter3 != false) {
		counter++;
		opponentCharacter3.healthPoints = opponentCharacter3.healthPoints - userCharacter.attackPower * counter;
		userCharacter.healthPoints = userCharacter.healthPoints - opponentCharacter3.counterAttackPower;
		$(".userCharHP").html("HP: " + userCharacter.healthPoints);
		$(".oppCharHP").html("Computer HP: " + opponentCharacter3.healthPoints);
	
			if (opponentCharacter3.healthPoints < 1) {
			opponentCharacter3.healthPoints = 0;
			alert("You win!!!");
			$(".userCharHP").html("HP: " + userCharacter.healthPoints);
			}
		$(".oppCharHP").html("Computer HP: " + opponentCharacter3.healthPoints);
		console.log(opponentCharacter3.healthPoints + " opponent");
		console.log(userCharacter.healthPoints + " user");		}
		else if (opponentCharacter2 != false) {
		counter++
		opponentCharacter2.healthPoints = opponentCharacter2.healthPoints - userCharacter.attackPower * counter;
		userCharacter.healthPoints = userCharacter.healthPoints - opponentCharacter2.counterAttackPower;
		$(".userCharHP").html("HP: " + userCharacter.healthPoints);
		$(".oppCharHP").html("Computer HP: " + opponentCharacter2.healthPoints);
			if (opponentCharacter2.healthPoints < 1) {
				opponentCharacter2.healthPoints = 0;
				alert("pick next character!");
				$(".userCharHP").html("HP: " + userCharacter.healthPoints);
				$(".oppCharHP").html("Computer HP: " + opponentCharacter2.healthPoints);
				$("opponentCharacter2").html("Opponent 2 killed")
				}
		console.log(opponentCharacter2.healthPoints + " opponent");
		console.log(userCharacter.healthPoints + " user");
		}
		else if (opponentCharacter1 != false) {
		counter++
		opponentCharacter1.healthPoints = opponentCharacter1.healthPoints - userCharacter.attackPower * counter;
		userCharacter.healthPoints = userCharacter.healthPoints - opponentCharacter1.counterAttackPower;
		$(".userCharHP").html("HP: " + userCharacter.healthPoints);
		$(".oppCharHP").html("Computer HP: " + opponentCharacter1.healthPoints);
			if (opponentCharacter1.healthPoints < 1) {
			opponentCharacter1.healthPoints = 0;
			alert("Pick 2nd opponent!");
			$("opponentCharacter1").html("Opponent 1 killed");
			}
		// console.log(opponentCharacter1.healthPoints + " opponent");
		// console.log(userCharacter.healthPoints + " user");
		}
		//starting game over if user is killed
		if (userCharacter.healthPoints < 1) {
			alert("Sorry, you were killed.")
			//$("<script>").reset();
		}
})
	

