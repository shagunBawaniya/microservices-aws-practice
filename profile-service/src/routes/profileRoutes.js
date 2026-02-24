const express = require('express');
const ProfileController = require('../controllers/profileController');
const ProfileService = require('../services/profileService');

const router = express.Router();

const profileService = new ProfileService();
const profileController = new ProfileController(profileService);

// route path is '/:userId' because app mounts this router on '/profile'
router.get('/:userId', profileController.getProfile.bind(profileController));

module.exports = router;