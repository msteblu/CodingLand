const router = require('express').Router();

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