const router = require('express').Router();
const tasksController = require('../../api/controllers/TasksController');
const answerController = require('../../api/controllers/AnswerController');
const clientController = require('../../api/controllers/ClientController');

router.post('/tasks/create', tasksController.create);
router.post('/tasks/delete', tasksController.delete);
router.get('/tasks/get', tasksController.get);

router.post('/answer/create', answerController.create);
router.post('/answer/set-mark', answerController.setMark);
router.get('/answers/get', answerController.get);

router.get('/user/getById', clientController.getUserById);
module.exports = router;