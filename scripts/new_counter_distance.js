let startBtn1 = document.querySelector('#start'); 
let pausedBtn1 = document.querySelector('#pause');
let returnBtn1 = document.querySelector('#return');

 
let distanceKm = 0; 
let oldLatitude = 0;
let oldLongitude = 0;
let currentLatitude = 0;
let currentLongitude = 0;


startBtn1.addEventListener('click', function () {
  runFlag = true; 
  navigator.geolocation.getCurrentPosition(success);
  oldLatitude = currentLatitude;
	oldLongitude = currentLongitude;
  countDistance();
}); 

pausedBtn1.addEventListener('click', function () { 
  runFlag = false; 
}); 

returnBtn1.addEventListener('click', function () {
  runFlag = true;
  countDistance();
});

const distanceCounter = (oldLat, oldLong, currentLat, currentLong) => {
  const degr_to_merid = 111.1; //количество километров в одном градусе на меридиане 
  const km_between_lat = Math.abs(oldLat - currentLat) * degr_to_merid; //AB и CD 
  const cos1 = Math.cos(oldLat * 2 * Math.PI / 360); 
  const cos2 = Math.cos(currentLat * 2 * Math.PI / 360); 
  const AD = Math.abs(currentLong - oldLong) * cos2 * 111.3; 
  const BC = Math.abs(currentLong - oldLong) * cos1 * 111.3; 
  const AH = Math.abs(BC - AD) / 2; 
  const BH = Math.sqrt((km_between_lat * km_between_lat) - AH * AH); 
  const HD = AD - AH; 
  const distanceBetweenPoints = Math.sqrt(BH * BH + HD * HD);
  return distanceBetweenPoints;
};

const success = (position) => {
	currentLatitude = position.coords.latitude;
	currentLongitude = position.coords.longitude;
	console.log(`${currentLatitude} ; ${currentLongitude}`);
};

const countDistance = () => {
	if (runFlag === true) {
		navigator.geolocation.getCurrentPosition(success);
		distanceKm += distanceCounter(oldLatitude, oldLongitude, currentLatitude, currentLongitude);
		oldLatitude = currentLatitude;
		oldLongitude = currentLongitude;
		console.log(distanceKm);
		document.querySelector('#distanceinkm').textContent = `${distanceKm}`.slice(0,5);
		setTimeout(countDistance, 5000);
	}
};