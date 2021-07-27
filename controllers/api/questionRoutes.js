const router = require('express').Router();
const Questions = require('../../models/Questions');

router.get('/:id', async (req, res) => {
    try {
      const questionData = await Questions.findByPk(req.params.id);
      console.log(questionData)
      res.render('questions', questionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;