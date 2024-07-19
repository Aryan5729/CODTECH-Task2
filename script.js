const apiKey = '4b4ef49aa5c535db462156c7e77a2692'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === '404') {
        alert('City not found');
        return;
    }

    displayWeather(data);
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <div><strong>City:</strong> ${data.name}</div>
        <div><strong>Temperature:</strong> ${data.main.temp}°C</div>
        <div><strong>Weather:</strong> ${data.weather[0].description}</div>
        <div><strong>Humidity:</strong> ${data.main.humidity}%</div>
        <div><strong>Wind Speed:</strong> ${data.wind.speed} m/s</div>
    `;
}
