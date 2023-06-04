const path = require('path');

const ApiErrors = require('../errors/ApiErrors');
const helperService = require('../services/HelperService');

class ClientController extends require('./BaseController') {
    constructor() {
        super();
    }

    static absolutePath = path.join(__dirname, '..', '..', 'public');
    static fileNames = {
        login: 'loginPage.html',
        registration: 'registerPage.html'
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
}

module.exports = new ClientController();