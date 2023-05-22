const router = require('express').Router();
const authController = require('../../api/controllers/AuthController');

router.post('/login', authController.login);
router.post('/registration', authController.register);

module.exports = router;