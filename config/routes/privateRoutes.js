const router = require('express').Router();
const tasksController = require('../../api/controllers/TasksController');
const answerController = require('../../api/controllers/AnswerController');

router.post('/tasks/create', tasksController.create);
router.post('/tasks/delete', tasksController.delete);

router.post('/answer/create', answerController.create);
router.post('/answer/set-mark', answerController.setMark);

module.exports = router;