const express = require('express');
const router = express.Router();
const users_api = require('../apis/users_api');

// ********* Google authRoutes *********	
router.get('/google', users_api.requestGoogleToken);
router.get('/google/callback', users_api.authenticateGoogleUser);

// ********* LinkedIn authRoutes *********
router.get('/linkedin', users_api.requestLinkedInToken);
router.get('/linkedin/callback', users_api.authenticateLinkedInUser);

// ********* current user *********
router.get('/current_user', (req, res) => {
  res.send(req.user);
});

// ********* totp authRoutes *********
router.get('/totp', )

// ********* logout *********
router.get('/logout', (req, res) => {
  req.logout();
  // redirect the user back to the root
  res.redirect('/');
});

module.exports = router;