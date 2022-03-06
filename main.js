// 1. Programming Basics.  Loop through the array using a for loop. Log out all the dishes.
const dishes = [
  "Spaghetti",
  "Lasagne",
  "Beans on toast",
  "Porridge",
  "Tomato soup",
  "Salmon",
];
for (let i = 0; i < dishes.length; i++) {
  console.log(dishes[i]);
}

// 2. DOM manipulation
// Using JavaScript, create a button and add it to the html
// When the button is clicked:
// - Insert an h1 tag with the text “Javascript test”
// - Change the background color of the body

const body = document.querySelector("body");
const newButton = document.createElement("button");
newButton.innerText = "Click me";
body.appendChild(newButton);

newButton.addEventListener("click", () => {
  const newH1 = document.createElement("h1");
  newH1.innerText = "Javascript test";
  body.appendChild(newH1);
  body.style.backgroundColor = "antiquewhite";
});
