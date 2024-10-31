

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



