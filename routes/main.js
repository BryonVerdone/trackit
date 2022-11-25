const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const authController = require('../controllers/auth');
const { ensureAuth } = require('../middleware/auth');
const assetsController = require('../controllers/assets');
//main routes
router.get('/', homeController.getIndex);
router.get('/profile', ensureAuth, assetsController.getProfile);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);

module.exports = router;
