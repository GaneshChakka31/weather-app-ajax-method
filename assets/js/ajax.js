let inputEle = document.getElementById("location-input");
let tempEle = document.getElementById("temp-value");
let locEle = document.getElementById("location");
let pressureEle = document.getElementById("pressure");
let windEle = document.getElementById("wind-speed");
let humidityEle = document.getElementById("humidity");
let weatherdescEle = document.getElementById('Weatherdesc');
let btnEle = document.getElementById("btn");
let weatherIconEle = document.getElementById("weather-icon");

const apikey = 'd97712d130b37eaa93143e58e898fda8';

btnEle.onclick = function() {
    if (inputEle.value == "") {
        alert("Please enter the city");
    } else {
        let loc = inputEle.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;

        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);

        xhr.send();

        xhr.onload = function() {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);

                const name = data.name;
                const feels_like = data.main.feels_like;
                const description = data.weather[0].main;
                const iconCode = data.weather[0].icon;  
                const pressure = data.main.pressure;
                const windspeed = data.wind.speed;
                const humidity = data.main.humidity;

                tempEle.innerText = `Temperature: ${Math.floor(feels_like - 273)}°C`; 
                locEle.innerText = `Location: ${name}`;
                weatherdescEle.innerText = `Weather: ${description}`;
                pressureEle.innerText = `Pressure: ${pressure} hPa`;  
                windEle.innerText = `Wind Speed: ${windspeed} m/s`;
                humidityEle.innerText = `Humidity: ${humidity}%`;

                switch (description) {
                    case 'Clear':
                        weatherIconEle.src = 'https://i.pinimg.com/474x/7c/2c/2b/7c2c2bc4e723d4e9751ccea52b9a8d5c.jpg';
                        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/f8/42/6b/f8426bf4f6892dfed16b2e0f583d5670.gif')";
                        break;
                    case 'Rain':
                        weatherIconEle.src = 'https://i.pinimg.com/474x/7f/53/0f/7f530f6e2583aa24c733232140dbbd55.jpg'; 
                        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/03/e0/d4/03e0d4324bf918ec11398a942ccde73b.gif')";
                        break;
                    case 'Clouds':
                        weatherIconEle.src = 'https://i.pinimg.com/474x/44/f8/e6/44f8e64e846b4fe5f5b27f752b672de3.jpg'; 
                        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/animation/2023/03/11/17/29/17-29-27-410_512.gif')";

                        break;
                    case 'Snow':
                        weatherIconEle.src = 'https://i.pinimg.com/474x/1b/51/c9/1b51c9cc72f8f1f9d57b2f2022e0c999.jpg'; 
                        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/45/65/44/456544b89487d793d72f8eb9f69b6188.gif')";
                        break;
                    case 'Smoke':
                        weatherIconEle.src = 'https://i.pinimg.com/474x/9c/92/10/9c92102cb1006c5009e2224fcc4c6c73.jpg'; 
                        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/7b/1f/ee/7b1feedee115638acecae5a9e8e9e26d.gif')";
                        break;
                    case 'Haze':
                        weatherIconEle.src = 'https://i.pinimg.com/736x/fd/9b/3b/fd9b3b7683bd78ebe09573f6ba56e6fb.jpg'; 
                        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/1d/1b/33/1d1b336e40de7fd0689afc6561f4e92f.gif')";
                        break;

                    case 'Thunderstorm':
                        weatherIconEle.src = 'https://i.pinimg.com/474x/4e/de/90/4ede90a3a6e48c65d104392361fdf7dd.jpg'; 
                        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/dc/7b/9b/dc7b9b31d491c5b44174436cddf0411f.gif')";
                        break;
                        case 'Fog':
                            weatherIconEle.src = 'https://i.pinimg.com/474x/6f/65/2a/6f652a4cc2b546647fcfa68d41069c46.jpg'; 
                            document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/1d/1b/33/1d1b336e40de7fd0689afc6561f4e92f.gif')";
                            break;
                    default:
                        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/91/60/af/9160af5773d23f92dfe4c43b8c163c2c.jpg')";
                        break;
                }
                
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
            } else {
                alert("Failed to fetch weather data. Please try again.");
            }
        };

        xhr.onerror = function() {
            alert("There was a problem with the request.");
        };

        inputEle.value = "";
    }
};
