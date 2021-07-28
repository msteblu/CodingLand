const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Questions, User, Gamepiece } = require("../models");

// Render the Home-Login Page
router.get("/", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/characterChoice");
    return;
  } else {
    try {
      res.render("homepage", {
        loggedIn: req.session.loggedIn,
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
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render the Questions
router.get("/questions", withAuth, async (req, res) => {
  try {
    const questionData = await Questions.findAll();

    const questions = questionData.map((questions) =>
      questions.get({ plain: true })
    );
    console.log(questions);
    res.render("questions", {
      questions,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
