const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Create a click Event listener 
button.addEventListener("click", function() {});
button.addEventListener("click", () => {});

// check to make sure the input is not blank
if (input.value != "") {}

// create a li element
const li = document.createElement("li");

// create a delete button
const deleteButton = document.createElement("button");

// populate the li elements textContent or innerHTML with the input value
li.textContent = input.value;

// populate the button textContent with a ❌
deleteButton.textContent = "❌";

// append the li element with the delete button
li.append(deleteButton);

// append the li element to the unordered list in your HTML
list.append(li);

// button that removes the li element
deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    input.focus();
});

// send the focus to the input element
input.focus();

// change the input value to nothing or the empty string to clean up the interface for the user
input.value = "";