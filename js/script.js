var snake=document.getElementById("snake")
document.onkeydown = keyDown;
document.write(snake.margin-left)
function keyDown(event){
	var event = event || window.event;
	switch(event.keyCode){
		case 37:
			/*snake.margin-left=snake.margin-left-5+"px";*/
			break;
		case 39:
			snake.left=snake.offsetLeft+5+"px";
			break;
		case 38:
			snake.top=snake.offsetTop-5+"px";
			break;
		case 40:
			snake.top=snake.offsetTop+5+"px";
			break;
	}

}