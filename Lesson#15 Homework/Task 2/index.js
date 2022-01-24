const MyApiKey = 'be66fad6c8a60ea3123bff0ce4705437';
const getWeatherData = async (lat, lng) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&lang=ua&appid=${MyApiKey}`;
    let res = await fetch(url);
    let data = await res.json();
    const curData = data['list'][0];
    const times = getTimes(data);
    const date = getDate(times[0])
    const city = data['city']['name'];
    const weather = curData['weather'][0]['main'];
    const hours = getHours(times);
    const temps = getTemps(data['list']);
    setCity(city);
    setDate(date);
    setIcon(weather);
    setWeather(weather);
    setHours(hours);
    setTemps(temps);
    console.log(temps);
    console.log(data['list']);
}

const success = (position) => {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    getWeatherData(lat, lng);
}
const getCoords = () => {
    navigator.geolocation.getCurrentPosition(success);
}

function setCity(city) {
    const cityName = document.getElementsByClassName('city');
    cityName[0].innerHTML = city;
}

function getTimes(data) {
    const times = [];
    for (let i = 0; i < 6; i++) {
        times.push(data['list'][i]['dt']);
    }
    return times;
}

function getDate(time) {
    let date = new Date(time * 1000);
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return formattedDate = weekdays[date.getDay()] + ' ' +
        months[date.getMonth()] + ' ' +
        date.getDate() + ' ' + date.getFullYear()
}

function setDate(date) {
    const dateH = document.getElementsByClassName('date');
    dateH[0].innerHTML = date;
}

function setIcon(weather) {
    const icon = document.getElementById('icon');
    if (weather == 'Clouds') {
        icon.className = 'fas fa-cloud-sun';
    } else if (weather == 'Snow') {
        icon.className = 'far fa-snowflake';
    } else if (weather == 'Clear') {
        icon.className = 'far fa-sun';
    }
}

function setWeather(weather) {
    let weatherInf = document.getElementsByClassName('weather');
    weatherInf[0].innerHTML = weather;
}

function getHours(times) {
    let hours = [];
    for (let i = 0; i < times.length; i++) {
        let date = new Date(times[i] * 1000);
        hours.push(date.getHours());
    }
    return hours;
}

function setHours(hours) {
    for (let i = 0; i < hours.length; i++) {
        let hour = document.getElementsByClassName(`${i}hour`);
        hour[0].innerHTML = hours[i]+':00';
    }
}

function getTemps(list) {
    let temps = [];
    for (let i = 0; i < 6; i++) {
        temps.push(Math.round(list[i]['main']['temp'] - 273.15));
    }
    return temps;
}

function setTemps(temps) {
    for (i = 0; i < temps.length; i++) {
        let temp = document.getElementsByClassName(`${i}temp`);
        temp[0].innerHTML = temps[i];
    }
}

getCoords();