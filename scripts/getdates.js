

// const mainnav = document.querySelector(".navigation");
// const hambutton = document.querySelector("#menu");


// hambutton.addEventListener("click", () => {
//     mainnav.classList.toggle("show");
//     hambutton.classList.toggle("show");
// });



function hambutton() {
    let x = document.querySelector(".navigation");
    if (x.style.display === "flex") {
        x.style.display = "none";
    }
    else {
        x.style.display = "flex";
    }
};