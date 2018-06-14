var doCoolStuff = function () {
	var className = document.getElementById('cool').className;
	if(className == 'cool'){
		document.getElementById('cool').className = "cool red";
	}else{
		document.getElementById('cool').className = "cool";
}

	}
	
var myName = function () {

}

var car = {
	make: 'Saturn',
	type: 'Ion',
	color: 'Silver',
	isOn: false,
	wheelNum: 4,
	seats: ['s1', 
			's2', 
			's3', 
			's4', 
			's5'],
	turnOn: function () {
		this.isOn = true;
	},
	fly: function () {
		alert('fly');
	},
	switchCar: function () {
		if(this.isOn == true) {
			this.isON = false;
		}else{
			this.isOn = true;
		}
	}
};	
console.log('Hello there friends!');