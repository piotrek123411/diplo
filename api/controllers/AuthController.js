const ApiErrors = require('../errors/ApiErrors')

class AuthController extends require('./BaseController') {
    constructor() {
        super();
    }

    async login(req, res, next) {
        try {
            res.json('login page');
        } catch(error) {
            next(ApiErrors.badRequest('Ошибка при логировании пользователя'));
        }
    }

    async register(req, res, next) {
        try {
            res.json('reg page');
        } catch(error) {
            next(ApiErrors.badRequest('Ошибка при регистрации пользователя'));
        }
    }
}

module.exports = new AuthController();