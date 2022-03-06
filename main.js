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

// 3. Async API calls
// Make an API call using the Fetch API.
// Display the first_name of the first three users in the DOM

fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((result) => {
    const userList = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      const userLi = document.createElement("li");
      userLi.innerText = result.data[i].first_name;
      userList.appendChild(userLi);
    }
    body.appendChild(userList);
  })
  .catch((error) => console.log(error));
