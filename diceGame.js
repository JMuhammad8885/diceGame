function rollDice(){
	let die1 = document.getElementById("die1");
	let status = document.getElementById("status");
	let d1 = Math.floor(Math.random() * 6) + 1;
	let diceTotal = d1;
	if ( d1 % 2 == 0) {
	alert('Gooooal!!!');
}else{
	alert('You Missed!, Game Over!');
}
	console.log(diceTotal);

}
