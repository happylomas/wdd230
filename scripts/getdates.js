

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