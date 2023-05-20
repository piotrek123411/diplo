const models = require('../models/');

class BaseController {
    async getAll(modelName, where = {}, req, res, next, sendAnswer = true) {
        try {
            const result = await models[modelName].findAll({ where: where });

            if (sendAnswer)
                res.status(200).json(result);
            else return result;
        } catch (error) {
            console.log(error);
            next(ApiError.badRequest({
                message: 'Ошибка получения записей'
            }));
        }
    }

    async getOne(modelName, where = {}, req, res, next, sendAnswer = true) {
        try {
            const result = await models[modelName].findOne({ where: where });

            if (sendAnswer)
                res.status(200).json(result.dataValues);
            else return result;
        } catch (error) {
            console.log(error)
            next(ApiError.badRequest({
                message: 'Ошибка получения записи'
            }));
        }
    }
    
    async add(modelName, pool = {}, req, res, next, sendAnswer = true) {
        try {
            const result = await models[modelName].create(pool);

            if (sendAnswer)
                res.status(200).json({
                    ...result.dataValues
                });
            else return result;
        } catch (error) {
            console.log(error);
            next(ApiError.badRequest({
                message: 'Ошибка добавления записи'
            }));
        }
    }
}

module.exports = BaseController;