const router = require("express").Router();

const userRoutes = require("./userRoutes");
const questionRoutes = require("./questionRoutes");
const addQuestionRoutes = require("./addQuestionRoutes");
const { route } = require("./userRoutes");

router.use("/users", userRoutes);
router.use("/question", questionRoutes);
router.use("/addQuestion", addQuestionRoutes);

module.exports = router;
