
// FOR Weather INformation 

// Select the HTML element in the document 
const myTown = document.querySelector("#town");
const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");
const myGraphic = document.querySelector("#graphic");


//  create a placeholder for the url varibales

const myKey = "73d982e9801e29a6f7a29230e5148af9"
const myLat = "5.1155980334154405"
const myLong = "7.3741497877942965"

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`


async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResult(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    
}

// Display the json

function displayResult(data) {
    console.log("hello")
    myTown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc =`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    myGraphic.setAttribute("SRC", iconsrc);
    myGraphic.setAttribute("alt", data.weather[0].description);
}


apiFetch();