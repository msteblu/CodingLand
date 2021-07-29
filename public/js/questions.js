console.log("loading questions js ...");

let additive = 80;
let modal = document.querySelector('.openModal')

document.querySelector(".question-container").addEventListener("click", (event) => {
    if (event.target.classList.contains("question-btn")) {
        const isCorrect = event.target.getAttribute("correct") === "true" ? true : false;
        // added event.target.parentElement display=none below
        console.log("isCorrect", isCorrect)
        if (isCorrect) {
            moveRight(additive);
            // resetRotation();
            additive += 80;
            event.target.parentElement.style.display = "none";
            if (additive === 480) {
                // adding delay and timer function
                const delay = 5000;
                setTimeout(function () {
                        modal.style.display = "flex";
                    },
                    delay);

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