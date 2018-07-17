var timer = null; 
var count = 10;
//Work around function
var coin = function(randNum){
	if(randNum > 5) {
				changeState(4);
			} else {
				changeState(5);
			}
};
//another change
var changeState = function (state) {
	document.body.className = 'bState' + state;
	clearInterval(timer);
	//if then statement
	if(state==2){
		timer = setInterval(function()
		{
			document.getElementById('countDown').innerHTML = count;
			count = count - 1;
			if(count <= -1){
				changeState(3);
			};
		},500);
	}
	//Test mark
	else if(state == 3){
		var randNum = Math.round(Math.random()*10);
		var success = setTimeout(coin(randNum), 2000);
	};
};
