const router = require('express').Router();
const clientController = require('../../api/controllers/ClientController');

router.get('/home', clientController.getHomePage);
router.get('/taskAdd', clientController.getTaskAddPage);
router.get('/answerAdd',clientController.getAnswerAddPage);
router.get('/answerCheck', clientController.getAnswerCheckPage);

module.exports = router;