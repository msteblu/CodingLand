console.log("loading questions js ...");

let additive =80;
let modal = document.querySelector('.openModal')

document.querySelector(".question-container").addEventListener("click",(event) => {
    if (event.target.classList.contains("question-btn")) {
        const isCorrect = event.target.getAttribute("correct") === "true" ? true: false;
    
        console.log("isCorrect",isCorrect)
        if (isCorrect) {
            moveRight(additive);
            additive+=80;
            if (additive === 480) {
                modal.style.display = "flex";
            }
        } else {
            alert("Wrong!");
        }
    }
});

replay = () => {
    document.location.replace("/questions")
  }

  noReplay = () => {
    document.location.replace("/")
  }