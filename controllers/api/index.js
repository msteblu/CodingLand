const router = require('express').Router();

const userRoutes = require("./userRoutes");
const addQuestionRoutes = require("./addQuestionRoutes");
const characterRoutes = require("./characterRoutes");
const { route } = require("./userRoutes");

router.use("/users", userRoutes);
router.use("/questions", addQuestionRoutes);
router.use("/characterChoice", characterRoutes);

module.exports = router;