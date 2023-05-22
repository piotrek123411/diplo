const ApiErrors = require('../errors/ApiErrors');

const hashService = require('../services/HashService');
const helperService = require('../services/HelperService');

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
            helperService.itContains(pool, ['login', 'password'], next);

            if (!(await helperService.paramAlreadyCreated('users', {login: pool.login}, 
                req, res, next, 'Пользователь с таким логином уже существует'))) return;

            pool.role_id = (await super.getOne('roles', { name: 'user' }, req, res, next, false)).dataValues.id;
            pool.password = await hashService.getHashString(pool.password);

            const user = await super.add('users', pool, req, res, next, true);
        } catch(error) {
            next(ApiErrors.badRequest(`Ошибка при регистрации пользователя \n${error}`));
        }
    }
}

module.exports = new AuthController();