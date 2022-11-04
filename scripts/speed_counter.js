let startBtn2 = document.querySelector('#start'); 
let pausedBtn2 = document.querySelector('#pause');
let returnBtn2 = document.querySelector('#return');

let speedminkm = 0;
let oldDistance = 0;


startBtn2.addEventListener('click', function () {
    timer = true; 
    stopCount();
}); 

pausedBtn2.addEventListener('click', function () { 
    timer = false; 
}); 

returnBtn2.addEventListener('click', function () {
    timer = true;
    stopCount();
});

function stopCount() {
	if (timer) {
		const currentDistance = Number(document.querySelector('#distanceinkm').textContent);
		const deltaDistance = currentDistance - oldDistance;
		if (deltaDistance === 0) {
			speedminkm = 0;
		} else {
			speedminkm = 5 / (deltaDistance);
		}
		console.log(currentDistance);
		console.log(oldDistance);
		document.querySelector('#speedminkm > .digit').textContent = `${speedminkm}`.slice(0,4);
	}
	setTimeout(stopCount, 5000)
}