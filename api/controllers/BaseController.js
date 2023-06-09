const models = require('../models/');
const ApiErrors = require('../errors/ApiErrors');

class BaseController {
    async getAll(modelName, where = {}, req, res, next, sendAnswer = true) {
        try {
            const result = await models[modelName].findAll({ where: where });

            if (sendAnswer)
                res.status(200).json(result);
            else return result;
        } catch (error) {
            console.log(error);
            next(ApiErrors.badRequest({
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
            next(ApiErrors.badRequest({
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
            next(ApiErrors.badRequest({
                message: 'Ошибка добавления записи'
            }));
        }
    }

    async delete(modelName, where = {}, req, res, next, sendAnswer = true) {
        try {
            const result = await models[modelName].destroy({ where });

            if (sendAnswer)
                res.status(200).json({
                    ...result.dataValues
                });
            else return result;
        } catch (error) {
            console.log(error);
            next(ApiErrors.badRequest({
                message: 'Ошибка удаления записи'
            }));
        }
    }

    async update(modelName, pool = {}, where = {}, req, res, next, sendAnswer = true) {
        try {
            const result = await models[modelName].update(pool, { where });

            if (sendAnswer)
                res.status(200).json({
                    ...result.dataValues
                });
            else return result;
        } catch (error) {
            console.log(error);
            next(ApiErrors.badRequest({
                message: 'Ошибка обновления записи'
            }));
        }
    }
}

module.exports = BaseController;