const ApiError = require('../errors/ApiErrors');
const BaseController = require('../controllers/BaseController');

class HelperService {
    itContains(pool, contains, next) {
        for (const el of contains)
            if (!pool[el]) return next(ApiError.badRequest(`Отсутствует поле ${el}`));
        return true;
    }

    async paramAlreadyCreated(modelName, where = {}, req, res, next, error = 'Необработанная ошибка') {
        const baseController = new BaseController();
        if ((await baseController.getOne(modelName, where, req, res, next, false)) !== null)
            return next(ApiError.badRequest(error));
        return true;
    }
}

module.exports = new HelperService();