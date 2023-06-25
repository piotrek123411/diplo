const path = require('path');

const ApiErrors = require('../errors/ApiErrors');
const helperService = require('../services/HelperService');

class ClientController extends require('./BaseController') {
    constructor() {
        super();
    }

    static absolutePath = path.join(__dirname, '..', '..', 'public');
    static absolutePathPrivate = path.join(__dirname, '..', '..', 'private');
    static fileNames = {
        login: 'loginPage.html',
        registration: 'registerPage.html',
        home: 'homePage.html',
        answCheck: 'answerCheckPage.html',
        taskAdd: 'taskAddPage.html',
        answerAdd: 'answerAddPage.html',
        taskRemove: 'taskList.html',
        task: 'task.html',
        mark: 'markAddPage.html'
    }

    getLoginPage(req, res, next) {
        try {
            res.sendFile(path.join(ClientController.absolutePath, ClientController.fileNames.login));
        } catch(error) {
            console.log(error)
            return next(ApiErrors.badRequest('Ошибка при отправке страницы логирования'));
        }
    }

    getRegisterPage(req, res, next) {
        try {
            res.sendFile(path.join(ClientController.absolutePath, ClientController.fileNames.registration));
        } catch(error) {
            return next(ApiErrors.badRequest('Ошибка при отправке страницы регистрации'));
        }
    }

    getHomePage(req, res, next) {
        try {
            res.sendFile(path.join(ClientController.absolutePath, ClientController.fileNames.home));
        } catch(error) {
            return next(ApiErrors.badRequest('Ошибка при отправке страницы'));
        }
    }

    getAnswerCheckPage(req, res, next) {
        try {
            res.sendFile(path.join(ClientController.absolutePath, ClientController.fileNames.answCheck));
        } catch(error) {
            return next(ApiErrors.badRequest('Ошибка при отправке страницы'));
        }
    }

    getTaskAddPage(req, res, next) {
        try {
            res.sendFile(path.join(ClientController.absolutePath, ClientController.fileNames.taskAdd));
        } catch(error) {
            return next(ApiErrors.badRequest('Ошибка при отправке страницы'));
        }
    }

    getAnswerAddPage(req, res, next) {
        try {
            res.sendFile(path.join(ClientController.absolutePath, ClientController.fileNames.answerAdd));
        } catch(error) {
            return next(ApiErrors.badRequest('Ошибка при отправке страницы'));
        }
    }

    getTaskRemovePage(req, res, next) {
        try {
            res.sendFile(path.join(ClientController.absolutePath, ClientController.fileNames.taskRemove));
        } catch(error) {
            return next(ApiErrors.badRequest('Ошибка при отправке страницы'));
        }
    }

    async getTask(req, res, next) {
        try {
            const pool = req.query;
            console.log(pool)
            res.sendFile(path.join(ClientController.absolutePath, ClientController.fileNames.task))
        } catch(error) {
            return next(ApiErrors.badRequest('Ошибка при отправке страницы'));
        }
    }

    getMarkAddPage( req, res, next) {
        try {
            res.sendFile(path.join(ClientController.absolutePath, ClientController.fileNames.mark));
        } catch(error) {
            return next(ApiErrors.badRequest('Ошибка при отправке страницы'));
        }
    }
}

module.exports = new ClientController();