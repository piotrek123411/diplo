const path = require('path');

const ApiErrors = require('../errors/ApiErrors');
const helperService = require('../services/HelperService');
const cookieParser = require('cookie-parser');

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

    async getAnswerCheckPage(req, res, next) {
        try {
            const user = res.user;
            console.log(user)
            let role = (await super.getOne('users', { login: user.login }, req, res, next, false))?.dataValues?.role_id;
            role = (await super.getOne('roles', { id: role }, req, res, next, false))?.dataValues?.name;
            if (role !== 'admin') 
                return res.sendFile(path.join(ClientController.absolutePath, ClientController.fileNames.home));

            res.sendFile(path.join(ClientController.absolutePath, ClientController.fileNames.answCheck));
        } catch(error) {
            console.log(error);
            return next(ApiErrors.badRequest('Ошибка при отправке страницы'));
        }
    }

    async getTaskAddPage(req, res, next) {
        try {
            const user = res.user;
            console.log(user)
            let role = (await super.getOne('users', { login: user.login }, req, res, next, false))?.dataValues?.role_id;
            role = (await super.getOne('roles', { id: role }, req, res, next, false))?.dataValues?.name;
            if (role !== 'admin') 
                return res.sendFile(path.join(ClientController.absolutePath, ClientController.fileNames.home));

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