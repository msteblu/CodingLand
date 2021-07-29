const router = require("express").Router();
const { Questions } = require("../../models");
//const withAuth = require('../../utils/auth');

router.post("/newQ", async (req, res) => {
  try {
    const newQuestion = await Questions.create({
      question: req.body.question,
      correct_answer: req.body.correct_answer,
      answer2: req.body.answer2,
      answer3: req.body.answer3,
      answer4: req.body.answer4,
    });

    res.status(200).json(newQuestion);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
