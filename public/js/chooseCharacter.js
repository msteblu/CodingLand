// Array of Characters
const charArray = [
  {
    id: 1,
    name: "ghost",
    img: "ghost-solid.svg",
  },
  {
    id: 2,
    name: "dragon",
    img: "dragon-solid.svg",
  },
  {
    id: 3,
    name: "spy",
    img: "spy-solid.svg",
  },
  {
    id: 4,
    name: "rocket",
    img: "rocket-solid.svg",
  },
];

let characters = document.forms["form"].elements["character"];
let chosenChar;

// Getting the specific character:
for (let i = 0, max = characters.length; i < max; i++) {
  characters[i].onclick = function () {
    chosenChar = this.id;
    // alert(chosenChar);
    // alert(charArray[chosenChar - 1].img);
  };
}

// Choosing An Icon
const choiceHandler = async (event) => {
  event.preventDefault();

  const id = charArray[chosenChar - 1].id;

  if (id) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/characterChoice", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the questions page
      document.location.replace("/questions");
    } else {
      alert(response.statusText);
    }
  }
};

addQuestion = () => {
  document.location.replace("/addQuestion")
}

// Event Listener
document.querySelector("form").addEventListener("submit", choiceHandler);
