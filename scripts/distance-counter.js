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
  console.log(position);
  const oldLat = Number(document.querySelector('#oldLatitude').textContent);
  const oldLong = Number(document.querySelector('#oldLongitude').textContent);

  const currentLat = Number(document.querySelector('#currentLatitude').textContent);
  const currentLong = Number(document.querySelector('#currentLongitude').textContent);

  const accuracyInKm = position.coords.accuracy / 1000;
  const distanceBetweenPoints = distanceCounter(oldLat, oldLong, currentLat, currentLong);

  const oldDistance = Number(document.querySelector('#distanceinkm').textContent);
  if (distanceBetweenPoints > 10) {
    document.querySelector('#oldLatitude').textContent = document.querySelector('#currentLatitude').textContent;
    document.querySelector('#oldLongitude').textContent = document.querySelector('#currentLongitude').textContent;
  } else if (distanceBetweenPoints > accuracyInKm * 0.8) {
    document.querySelector('#distanceinkm').textContent = `${oldDistance + distanceBetweenPoints}`.slice(0, 5);
    document.querySelector('#oldLatitude').textContent = document.querySelector('#currentLatitude').textContent;
    document.querySelector('#oldLongitude').textContent = document.querySelector('#currentLongitude').textContent;
  }
  document.body.querySelector('#currentLatitude').textContent =`${position.coords.latitude}`;
  document.body.querySelector('#currentLongitude').textContent =`${position.coords.longitude}`;

  console.log(distanceBetweenPoints);
};

const error = () => {
  alert('Sorry, no position available.');
};

const options = {
    enableHighAccuracy: true
};

const id = navigator.geolocation.watchPosition(success, error, options);
