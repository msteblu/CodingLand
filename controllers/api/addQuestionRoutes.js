const router = require('express').Router();
const { Questions } = require('../../models');
//const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {

    try {
        const newQuestion = await Questions.create({
            question: req.body.question,
            correct_answer: req.body.correct_answer,
            answer2: req.body.answer2,
            answer3: req.body.answer3,
            answer4: req.body.answer4,
        });

        console.log(newQuestion);
        res.json(newQuestion);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;