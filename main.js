var ball = document.getElementById('ball');

addEventListener('keydown',move);
function move (e) {
	
	if(e.which == 37){
		ball.style.left = '0px';
	}
	if (e.which == 38){
		ball.style.top = '0px';
	}
	if (e.which == 39){
		ball.style.left = '1200px';
	}
	if (e.which == 40){
		ball.style.top  = '800px';
	}
	
}