const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const authController = require('../controllers/auth');
const { ensureAuth } = require('../middleware/auth');
//main routes
router.get('/', homeController.getIndex);
router.get('/profile', ensureAuth, postsController.getProfile);
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);
router.get('/login', authController.getLogin);
module.exports = router;
