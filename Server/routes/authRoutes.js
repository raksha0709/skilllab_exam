const express = require('express');
const router = express.Router();
const passport = require('../config/Passport');

// Authentication routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Successful authentication, redirect or respond as needed
  res.redirect('/');
});

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
  // Successful authentication, redirect or respond as needed
  res.redirect('/');
});

module.exports = router;
