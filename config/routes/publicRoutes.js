const router = require('express').Router();
const authController = require('../../api/controllers/AuthController');

router.post('/auth/login', authController.login);
router.post('/auth/registration', authController.register);

module.exports = router;