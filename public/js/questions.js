let position = 0;
let correct = 0;
let quiz, quiz_status, question, choice, choices, choiceA, choiceB, choiceC, choiceD;

// let questions = [
//     {
//       question: "What is our instructor Charlie’s dog’s name?",
//       a: "Beau",
//       b: "Bruce",
//       c: "Wanda",
//       d: "Hemingsworth",
//       answer: "a"
//     },
   
//       {
//         question: "What country is Machu Picchu in?",
//         a: "Peru",
//         b: "Chile",
//         c: "Colombia",
//         d: "Brazil",
//         answer: 'a'
//       },
//       {
//         question: "What is one of Charlie’s cat’s names?",
//         a: "Bitcoin",
//         b: "Git",
//         c: "Handlebars",
//         d: "Java",
//         answer: 'a'
//       },
//       {
//         question: "What is Sir Isaac Newton known for?",
//         a: "Developing the law of gravity",
//         b: "Discovering electricity",
//         c: "Lead singer of Metallica",
//         d: "Was a knight of the Round Table",
//         answer: 'a'
//       },
//       {
//         question: "What is Bruce Banner’s superhero name?",
//         a: "Hulk",
//         b: "Iron Man",
//         c: "Dr. Strange",
//         d: "Vision",
//         answer: 'a'
//       },
//       {
//         question: "What year did NASA first land astronauts on the moon?",
//         a: "1969",
//         b: "1959",
//         c: "1960",
//         d: "1690",
//         answer: 'a'
//       },
//       {
//         question: "How many species of whales are there?",
//         "correctAnswer": "90",
//         "answer2": "10",
//         "answer3": "50",
//         "answer4": "200"
//       },
//       {
//         question: "Which movie did Quentin Tarantino NOT direct?",
//         a: "Die Hard",
//         b: "Pulp Fiction",
//         c: "Kill Bill",
//         d: "Django Unchained",
//         answer: 'a'
//       },
//       {
//         question: "Who was Indira Gandhi?",
//         a: "First female prime minister of India",
//         b: "Social media influencer",
//         c: "Inventor of programmable computer",
//         d: "Famous architect",
//         answer: 'a'
//       },
//       {
//         question: "Rickrolling refers to a song by what musician?",
//         a: "Rick Astley",
//         b: "Ric Ocasek",
//         c: "Richard Nixon",
//         d: "Richie Rich",
//         answer: 'a'
//       },
//       {
//         question: "What site is known for job postings?",
//         a: "Indeed",
//         b: "Monsters Inc",
//         c: "LinkedOut",
//         d: "Discord",
//         answer:'a'
//       },
//       {
//         question: "Where are the Olympics being held in 2021?",
//         a: "Tokyo",
//         b: "Los Angeles",
//         c: "Switzerland",
//         d: "Rio",
//         answer: 'a'
//       },
//       {
//         question: "What is the largest lake in the U.S.?",
//         a: "Superior",
//         b: "Erie",
//         c: "Ontario",
//         d: "Michigan",
//         answer: 'a'
//       },
//       {
//         question: "What animal is the Cheetos mascot?",
//         a: "Cheetah",
//         b: "Orangutan",
//         c: "Gecko",
//         d: "Tiger",
//         answer:'a'
//       },
//       {
//         question: "What year was Swedish environmental activist Greta Thunberg born?",
//         a: "2003",
//         b: "1993",
//         c: "1973",
//         d: "1963",
//         answer:'a'
//       },
//       {
//         question: "Who wrote 'The Hill We Climb' and is the youngest inaugural poet in U.S. history?",
//         a: "Amanda Gorman",
//         b: "Maya Angelou",
//         c: "Macaulay Culkin",
//         d: "Robert Downey Jr.",
//         answer: 'a'
//       },
//       {
//         question: "Pediatricians recommend a maximum of how many hours of screen time per day for children?",
//         a: "2 hours",
//         b: "Unlimited",
//         c: "16 hours if including YouTube time",
//         d: "Half an hour",
//         answer:'a'
//       },
//       {
//         question: "What’s an example of a palindrome?",
//         a: "Kayak",
//         b: "Tacos for cats",
//         c: "Camel",
//         d: "Beep",
//         answer: 'a'
//       },
//       {
//         question: "What is myopia?",
//         a: "Nearsightedness",
//         b: "Low-grade fever",
//         c: "Sleep disorder",
//         d: "Charlie's cat's name",
//         answer:'a'
//       },
//       {
//         question: "What is the default name of the main character in Minecraft?",
//         a: "Steve",
//         b: "Joe",
//         c: "Karen",
//         d: "Roger",
//         answer: 'a'
//       }
//   ]

  function get(question) {
      return document.getElementById(question)
  }

  function renderQuestion() {
      quiz = get("quiz");
    
    
    if (position >= questions.length) {
          quiz.innerHTML = "<h2> You got "+correct+" of "+questions.length+" questions correct</h2>";
          get("quiz_status").innerHTML = "Quiz complete";

          position = 0;
          correct = 0;

      return false;
      }
      
      quiz.innerHTML = "<h3>"+question+"</h3>"

      quiz.innerHTML += "<label> <input type = 'radio' name = 'choices' value = 'A'>"+choiceA+"</label><br>"
      quiz.innerHTML += "<label> <input type = 'radio' name = 'choices' value = 'B'>"+choiceB+"</label><br>"
      quiz.innerHTML += "<label> <input type = 'radio' name = 'choices' value = 'C'>"+choiceC+"</label><br>"
      quiz.innerHTML += "<label> <input type = 'radio' name = 'choices' value = 'D'>"+choiceD+"</label><br>"

  
  
    }

    function correctAnswer() {
      choices = document.getElementsByName("choices");
      for()
    }