const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Questions, User, Gamepiece } = require("../models");

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Render the Home-Login Page
router.get("/", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/characterChoice");
    return;
  } else {
    try {
      res.render("homepage", {
        loggedIn: req.session.loggedIn,
        chosenChar: "ghost-solid.svg",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

// Render the Character Choices
router.get("/characterChoice", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ["password"] },
    });
    const user = userData.get({ plain: true });
    res.render("characterChoice", {
      ...user,
      loggedIn: req.session.loggedIn,
      chosenChar: "ghost-solid.svg",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render the Questions
router.get("/questions", withAuth, async (req, res) => {
  try {
    const questionData = await Questions.findAll();

    const suffledQuestions = shuffle(questionData)

    const questions = suffledQuestions.slice(0,5).map((questions) =>
      questions.get({ plain: true })
    );
    // console.log(questions)

    res.render("questions", {
      questions,
      loggedIn: true,
      chosenChar: req.session.chosenChar,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/addQuestion", async (req, res) => {
    try {
      res.render("addQuestion", {
        chosenChar: req.session.chosenChar
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
