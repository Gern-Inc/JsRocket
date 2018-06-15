var timer = null; 
var count = 10;
var changeState = function (state) {
	document.body.className = 'bState' + state;
	clearInterval(timer);

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
	else if(state == 3){
		var success = setTimeout(funtion()
		{
			var randNum = Math.round(Math.random()*10);
			if(randNum > 5)
			{
				changeState(4);
			}else{
				changeState(5);
			}
		},2000);
	};
}
