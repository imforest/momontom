const API_KEY = "82dfa2ac696b0fa42f7000023a029fb1";
const COORDS_LS = "coords";
const weather = document.querySelector(".js-weather");

function saveCoords(obj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(obj));
}

function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(json => {
            const temp = json.main.temp;
            const name = json.name;
            weather.innerHTML = `${temp} &#176 @ ${name}`;
        });
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.error("Can't access geo location.");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS_LS);

    if (loadedCoords) {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    } else {
        askForCoords(); 
    }
}

function init() {
    loadCoords();
}
init();