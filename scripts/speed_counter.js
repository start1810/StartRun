let startBtn2 = document.querySelector('#start'); 
let pausedBtn2 = document.querySelector('#pause');
let returnBtn2 = document.querySelector('#return');

let avgSpeed = 0;
let time = 0;
let min = 0;
let sec = 0;

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
		if ((time != 0) && (currentDistance != 0)) {
			avgSpeed = Math.round(time / currentDistance);
			sec = avgSpeed % 60;
			min = Math.round(avgSpeed / 60);
		}
		console.log(avgSpeed);
		console.log(min);
		console.log(sec);
		document.querySelector('#speedminkm > .digit').textContent = `${min}'${sec}"`;
		time += 6;
	}
	setTimeout(stopCount, 6000);
};