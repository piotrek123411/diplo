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
            const pool = req.body;
            pool.role_id = (await super.getOne('roles', { name: 'user' }, req, res, next, false)).dataValues.id;
            const user = await super.add('users', pool, req, res, next, true);
        } catch(error) {
            next(ApiErrors.badRequest('Ошибка при регистрации пользователя'));
        }
    }
}

module.exports = new AuthController();