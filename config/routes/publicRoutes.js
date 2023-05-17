const router = require('express').Router();
const authController = require('../../api/controllers/AuthController');

router.get('/login', authController.login);
router.get('/registration', authController.register);

module.exports = router;