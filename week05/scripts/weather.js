
const myTown = document.querySelector("#town");
const myDesciption = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");
const myGraphic = document.querySelector("#graphic");

const url = "https://api.oprnweathermap.org/data/2.5/"


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    
}


function displayResult(data) {
    currentTemp.innerHTML = `${data.}&deg;F`;
    console.log("hello")
    myTown.innerHTML = data.name
    myDesciption.innerHTML = data.weather[0].desciption
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc =`https://openweathermap.org/img/wn/${data.weather[0].icon}10d@2x.png`
    myGraphic.setAttribute("SRC", iconsrc)
    myGraphic.setAttribute("alt", data.weather[0].desciption)
}



apiFetch();





// const apiKey = 'bb11ec2e2f5d8e02a41b39d44e996d3b'; // Replace with your OpenWeather API key
// const city = 'Rexburg'; // You can use any city
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Rexburg&appid=bb11ec2e2f5d8e02a41b39d44e996d3b&units=metric`;

// async function fetchWeather() {
//     try {
//         const response = await fetch(apiUrl);
//         const weatherData = await response.json();

//         // Extract data
//         const temp = weatherData.main.temp;
//         const condition = weatherData.weather[0].description;
//         const icon = weatherData.weather[0].icon;

//         // Update HTML elements
//         document.querySelector('.temperature').textContent = `${temp}°C`;
//         document.querySelector('.condition').textContent = condition;
//         document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// }

// fetchWeather();
