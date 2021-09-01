const API_KEY = `1ff6ccf1da1c9ea26bf26626b70bdca7`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    document.getElementById('city-name').value = '';

    fetch(url)
    .then(response => response.json())
    .then(data => displayTemperature(data));
} 

const setInnerText = (id, info) => {
    document.getElementById(id).innerText = info;
}

const displayTemperature = (temperature) => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', `${temperature.main.temp}°C`);
    setInnerText('condition', temperature.weather[0].main);
    setInnerText('country', `Country: ${temperature.sys.country}`);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

}