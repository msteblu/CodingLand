const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/characterChoice', async (req, res) => {
  try {
    res.render('characterChoice');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render the login page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});
  
// Render the signup page
router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;