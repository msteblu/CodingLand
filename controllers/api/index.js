const router = require('express').Router();

const userRoutes = require('./userRoutes');
const signupRoutes = require('./signupRoutes');
const questionRoutes = require('./questionRoutes');
const addQuestionRoutes = require('./addQuestionRoutes');
const { route } = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/signup', signupRoutes);
router.use('/question', questionRoutes);
router.use('/addQuestion', addQuestionRoutes);

module.exports = router;