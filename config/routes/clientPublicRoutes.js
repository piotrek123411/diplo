const router = require('express').Router();
const clientController = require('../../api/controllers/ClientController');

router.get('/auth/login', clientController.getLoginPage);
router.get('/auth/reg', clientController.getRegisterPage);

module.exports = router;