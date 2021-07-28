const router = require('express').Router();
const Gamepiece = require('../../models/Gamepiece');

router.get('/:id', async (req, res) => {
    try {
      const characterData = await Gamepiece.findByPk(req.params.id);
      console.log(characterData)
      res.render('characterChoice', characterData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;