const getWeatherData = async (lat, lng) => {
    const MyApiKey = 'be66fad6c8a60ea3123bff0ce4705437';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&lang=ua&appid=${MyApiKey}`;
    let res = await fetch(url);
    let data = await res.json();
    const weather = data['weather'][0]['main'];
    const temp = data['main']['temp'];
    const city = data['name'];
    const day = getDay();
    const month = getMonth();
    setIcon(weather);
    setTemp(temp);
    setWeather(weather);
    setCity(city);
    setDate(day, month);
}
const success = (position) => {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    getWeatherData(lat, lng);
}
const getCoords = () => {
    navigator.geolocation.getCurrentPosition(success);
}

function setIcon(weather) {
    const icon = document.getElementById('icon');
    if (weather == 'Clouds') {
        icon.className = 'fas fa-cloud-sun';
    } else if (weather == 'Snow') {
        icon.className += 'far fa-snowflake'
    } else if (weather == 'Clear') {
        icon.className = 'far fa-sun'
    }
}

function setTemp(temp) {
    const el = document.getElementsByClassName('tempH');
    el[0].innerHTML = `${Math.round(temp - 273.15)}°`;
}

function setWeather(weather) {
    const weatherInf = document.getElementsByClassName('clouds');
    weatherInf[0].innerHTML = weather.toUpperCase();
}

function setCity(city) {
    const cityName = document.getElementsByClassName('city');
    cityName[0].innerHTML = city;
}

function getDay() {
    const d = new Date();
    day = d.getDate();
    return day;
}

function getMonth() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date();
    let month = months[d.getMonth()];
    return month;
}

function setDate(day, month) {
    const date = document.getElementsByClassName('dateH');
    date[0].innerHTML = `${day}st ${month}`;
}

getCoords();