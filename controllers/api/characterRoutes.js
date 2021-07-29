const router = require("express").Router();
const Gamepiece = require("../../models/Gamepiece");
const withAuth = require("../../utils/auth");

// Posting the user's chosen character
router.post("/", withAuth, async (req, res) => {
  try {
    const characterData = await Gamepiece.findByPk(req.body.id);

    req.session.save((err) => {
      req.session.chosenChar = characterData.getDataValue("imgfile");
      res.redirect("/questions");
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
