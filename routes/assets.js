const express = require('express');
const router = express.Router();
const postsController = require('../controllers/assets');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

router.get('/:id', ensureAuth, postsController.getPost);

module.exports = router;
