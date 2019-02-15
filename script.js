// // What is jQuery?
// // How do I access it?

// Selecting an element with vanilla JS
const vanilla = document.querySelector("#vanilla-container");

// Selecting an element with jQuery
const jMagic = $("#jquery-container")
console.log(jMagic);

// Inserting HTML string with vanilla JavaScript
vanilla.innerHTML = "<h1>Meme time</h1>"

// Inserting HTML string with jQuery
jMagic.html("<h1>MAGIC</h1>")

// Click events with vanilla JS
// document.querySelector("#button").addEventListener("click", () => {
// console.log("you clicked the button!")
// })

// Click events with jQuery

// $("#button").on("keyup", () => {
//     console.log("you clicked the button!")
// })

$("#button").click(() => {
    console.log("you clicked the button!")
})


// Creating elements with vanilla JS
const newElement = document.createElement("div");
newElement.innerHTML = "some text";


// Creating elements with jQuery
const jNewElement = $("<div>")
jNewElement[0].innerHTML = "some other text"
console.log(jNewElement);

//Adding classes and ids with vanilla JS
newElement.classList.add("vanilla");


// Adding classes and ids with jQuery
jNewElement.addClass("jMagic");
console.log(jNewElement);

newElement.id = "new-id";
console.log(newElement);

jNewElement.attr("id", "jquery-thing")
console.log(jNewElement)


// Appending with vanilla JS
document.querySelector("#vanilla-container").appendChild(newElement);

// Appending with jQuery
$("#jquery-container").append(jNewElement);

// form inputs with jQuery
$("#save-btn").click(() => {
    // const inputValue = $("#text-input").val();
    // console.log(inputValue)
    console.log($("#text-input").val())
})







