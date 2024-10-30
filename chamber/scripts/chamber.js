// the hero image bill board js code
let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//  last modified date js
let lastmodify = document.lastModified;
let ModifiedElement = document.getElementById("lastModified")
if (ModifiedElement) {
    ModifiedElement.textContent = `Last Modification: ${lastmodify}`

}



const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector(".navigation");

hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
});

// Dark Mood
const darkmood = document.querySelector("#darkBtn");
darkmood.addEventListener("click", () => {
    main.classList.toggle("dark");
});



// Discover section 

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 86400000;
// today's date
const theDateToday = new Date();

// initialize display elements
const todayElement = document.querySelector("#today");
const christmasElement = document.querySelector("#christmas");
const christmasDateElement = document.querySelector("#christmasDate");
const daysElement = document.querySelector("#daysleft");

// processing
const today = Date.now();
const christmasDate = new Date(Date.UTC(theDateToday.getFullYear(), 11, 25));
// check if is the waing days of December, if so ... change to next year.
if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
	christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}
// find difference between epoch times in ms and convert to days
let daysleft = (christmasDate.getTime() - Date.now()) / msToDays;

todayElement.textContent = today;
christmasElement.textContent = christmasDate.getTime();
christmasDateElement.textContent = christmasDate;
daysElement.textContent = `${daysleft.toFixed(0)} days`;



// For Directory Page

document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById("memberDirectory");

    // Fetch member data
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            data.members.forEach(member => {
                const memberCard = document.createElement("div");
                memberCard.classList.add("member-card");

                memberCard.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name} Logo">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">${member.website}</a>
                    <p>Membership Level: ${member.membershipLevel}</p>
                    <p>${member.description}</p>
                `;
                directory.appendChild(memberCard);
            });
        });

    // Toggle between Grid and List view
    document.getElementById("gridView").addEventListener("click", () => {
        directory.classList.add("#gridView");
        directory.classList.remove("#listView");
    });

    document.getElementById("listView").addEventListener("click", () => {
        directory.classList.add("#listView");
        directory.classList.remove("#gridView");
    });



    // Copy from Blazzard JS file

const gridbutton = document.querySelector("#gridView");
const listbutton = document.querySelector("#listView");
// const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}





});
