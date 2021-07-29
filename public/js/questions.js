console.log("loading questions js ...");

let additive =80;

document.querySelector(".question-container").addEventListener("click",(event) => {
    if (event.target.classList.contains("question-btn")) {
        const isCorrect = event.target.getAttribute("correct") === "true" ? true: false;
    
        console.log("isCorrect",isCorrect)
        if (isCorrect) {
            moveRight(additive);
            additive+=80;
            if (additive === 400) {
                alert("You Win!")
            }
        } else {
            alert("Wrong!");
        }
    }
});

