

const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector(".navigation");

hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
});

// Dark Mood
// const darkModeButton = document.querySelector("#darkmood");
// darkmood.addEventListener("click", () => {
//     if (darkmood.textContent.includes("🕶️")) {
//         main.style.background = "#121212"; // Dark background color
//         main.style.color = "#fff"; // Light text color
//         darkmood.textContent = "X";
//     }
// });

// // Toggle dark mode
// darkModeButton.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
// });

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const darkModeButton = document.querySelector("#darkmood");

// Create a click event listener for the main button
button.addEventListener("click", () => {
    if (input.value !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

// Toggle dark mode
darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Initialize chapters from localStorage
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}





// hambutton.addEventListener("click", () => {
//     mainnav.classList.toggle("show");
//     hambutton.classList.toggle("show");
// });



// function hambutton() {
//     let x = document.querySelector(".navigation");
//     if (x.style.display === "flex") {
//         x.style.display = "none";
//     }
//     else {
//         x.style.display = "flex";
//     }
// };


let lastmodify = document.lastModified;
let ModifiedElement = document.getElementById("lastModified")
if (ModifiedElement) {
    ModifiedElement.textContent = `Last Modification: ${lastmodify}`

}




// FOR Weather INformation 

// Select the HTML element in the document 
const myTown = document.querySelector("#town");
const myDesciption = document.querySelector("#description");
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
    myDesciption.innerHTML = data.weather[0].desciption;
    myTemperature.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc =`https://openweathermap.org/img/wn/${data.weather[0].icon}10d@2x.png`;
    myGraphic.setAttribute("SRC", iconsrc);
    myGraphic.setAttribute("alt", data.weather[0].desciption);
}


apiFetch();