let oldLatitude = 0;
let oldLongitude = 0;
let currentLatitude = 0;
let currentLongitude = 0; 

let distanceKm = 0;
let distanceBetweenPoints = 0;

const updateDistance = () => {
	getOldCoord();
	getCurrentCoord();
	distanceBetweenPoints = countDistance(oldLatitude, oldLongitude, currentLatitude, currentLongitude);
	setDistance();
};

const getOldCoord = () => {
	oldLatitude = currentLatitude;
	oldLongitude = currentLongitude;
};

const getCurrentCoord = () => {
	navigator.geolocation.getCurrentPosition(success);
};

const success = (position) => {
	currentLatitude = Math.round(position.coords.latitude * 1000000) / 1000000;
  currentLongitude = Math.round(position.coords.longitude * 1000000) / 1000000;
};

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
  const distance = Math.sqrt(BH * BH + HD * HD);
  return distance;
};

const setDistance = () => {

};

