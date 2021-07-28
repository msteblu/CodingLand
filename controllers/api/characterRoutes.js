const router = require("express").Router();
const Gamepiece = require("../../models/Gamepiece");
// const withAuth = require("../utils/auth");

router.post("/", async (req, res) => {
  try {
    const characterData = await Gamepiece.findByPk(req.body.id);

    req.session.save(() => {
      req.session.chosenChar = characterData.imgfile;
    });

    res.render("questions", {
      loggedIn: req.session.loggedIn,
      chosenChar: req.session.chosenChar,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
