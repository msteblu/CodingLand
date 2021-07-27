const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Questions, User, Gamepiece } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/questions', async (req, res) => {
  try {
    const questionData = await Questions.findAll();

    const questions = questionData.map((questions) => questions.get({ plain: true }))
    console.log(questions);
    res.render('questions', {questions});
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

router.get('/characterChoice', async (req, res) => {
  try {
    res.render('characterChoice');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;