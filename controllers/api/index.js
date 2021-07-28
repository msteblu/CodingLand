const router = require("express").Router();

const userRoutes = require("./userRoutes");
const questionRoutes = require("./questionRoutes");
const addQuestionRoutes = require("./addQuestionRoutes");
const characterRoutes = require("./characterRoutes");
const { route } = require("./userRoutes");

router.use("/users", userRoutes);
router.use("/question", questionRoutes);
router.use("/addQuestion", addQuestionRoutes);
router.use("/characterChoice", characterRoutes);

module.exports = router;
