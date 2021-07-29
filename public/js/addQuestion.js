const newQuestionPost = async (event) => {
    event.preventDefault();

    const question = document.querySelector("#question").value.trim();
    const correct_answer = document.querySelector('#correct').value.trim();
    const answer2 = document.querySelector("#answer2").value.trim();
    const answer3 = document.querySelector("#answer3").value.trim();
    const answer4 = document.querySelector("#answer4").value.trim();

    if ( question && correct_answer && answer2 && answer3 && answer4 ){
        const response = await fetch("/api/questions/newQ", {
            method: "POST",
            body: JSON.stringify({ question, correct_answer, answer2, answer3, answer4 }),
            headers: { "Content-Type": "application/json" },
          });
          console.log(question);
          console.log(correct_answer);
          if (response.ok) {
            alert("Thanks for adding a question to our game!")
          } else {
            alert(response.statusText);
            alert("Please complete all fields!");
          }
    }
};

document
    .querySelector(".new-question-form")
    .addEventListener("submit", newQuestionPost);

