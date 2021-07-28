// beginning of the charArray:
const charArray = [ 
  {
    id: 1,
    name: "ghost",
    img: "ghost-solid.svg"
  },
  {
    id: 2,
    name: "dragon",
    img: "dragon-solid.svg"
  },
  {
    id: 3,
    name: "spy",
    img: "spy-solid.svg"
  },
  {
    id: 4,
    name: "rocket",
    img: "rocket-solid.svg"
  }
];
//Mai helped with:

let characters = document.forms["form"].elements["character"];
let chosenChar;

for (let i = 0, max = characters.length; i < max; i++) {
  characters[i].onclick = function () {
    chosenChar = this.id;
    alert(chosenChar);
  };

};
//our group started this:
// for (let i = 1; i < 4; i++) {

// };