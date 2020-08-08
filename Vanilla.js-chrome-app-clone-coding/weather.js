const API_KEY = "4b269952f4e55c72ce7689cdf1160b66";
const COORDS = "Coords";
const weather = document.querySelector(".js-weather");

function getWeather(latitudeVar, longitudeVar){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitudeVar}&lon=${longitudeVar}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(jsonfile){
        const temperature = jsonfile.main.temp;
        const place = jsonfile.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
} 

function saveCoords(coordsObject){
    localStorage.setItem(COORDS, JSON.stringify(coordsObject));
}

function handleGeoTrue(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    const coordsObj = {
        latitude,
        longitude
    };
    
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoFalse(position){
    
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoTrue, handleGeoFalse);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();