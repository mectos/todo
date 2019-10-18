// All variables
const clearIcon = document.getElementById("clear-icon");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const addIcon = document.getElementById("add-icon");
const deleteIcon = document.getElementById("delete-icon");
const checkIcon = document.getElementById("check-icon");
const input = document.getElementById("input");

// make the input focused in the beginning.
input.focus();

// Refresh page on click
clearIcon.addEventListener("click", function() {
    window.location.reload();
}, false);

// Displaying the date
const date = new Date();
const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
};
dateElement.innerHTML = date.toLocaleDateString("en-US", options);

// The delete task via delete Icon
function deleteTask(event) {
    const element = event.target;
    // console.log(element.parentNode);
    element.parentNode.parentNode.removeChild(element.parentNode);
};

// Using the addTask function with the input and then clearing input
function addAndClearInput() {
    addTask(input.value);
    input.value = "";
}

// Check function for the event listener when creating a task.
function checkTask(event) {
    const element = event.target;
    if (element.classList.contains("far", "fa-circle")) {
        element.classList.remove("far", "fa-circle");
        element.classList.add("fas", "fa-check-circle");
        element.parentNode.childNodes[1].classList.add("check-text");
    } else if (element.classList.contains("fas", "fa-check-circle")) {
        element.classList.remove("fas", "fa-check-circle");
        element.classList.add("far", "fa-circle");
        element.parentNode.childNodes[1].classList.remove("check-text");
    }
}

// ADD TAST FUNCTION
function addTask(input) {
    // CREATES THE li ELEMENT.
    const li = document.createElement("li");
    li.classList.add("new-task");
    // CREATES THE CHECK ICON ELEMENT
    const checkElement = document.createElement("i");
    checkElement.id = "check-icon";
    checkElement.classList.add("far", "fa-circle");
    li.appendChild(checkElement);
    // CREATES THE TEXT ELEMENT
    const textElement = document.createElement("span");
    textElement.innerHTML = input;
    li.appendChild(textElement);
    // CREATES THE DELETE ICON ELEMENT
    const deleteElement = document.createElement("i");
    deleteElement.id = "delete-icon";
    deleteElement.classList.add("fas", "fa-trash-alt");
    li.appendChild(deleteElement);
    // Create a task only when there is an input
    if (input) {
        list.appendChild(li);
    }
    // Makes the delete option possible
    deleteElement.addEventListener("click", deleteTask, false);
    checkElement.addEventListener("click", checkTask, false);
}

/********
EVENT LISTENERS
*********/

// for adding by clicking the addIcon
addIcon.addEventListener("click", addAndClearInput, false);

// for adding by clicking the enter key
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    addAndClearInput();
    }
});
