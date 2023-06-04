const ApiErrors = require('../errors/ApiErrors');
const helperService = require('../services/HelperService');

class TasksController extends require('./BaseController') {
    constructor() {
        super();
    }

    async create(req, res, next) {
        try {
            const pool = req.body;
            const user = res.user;
            helperService.itContains(pool, ['value'], next);

            let role = (await super.getOne('users', { login: user.login }, req, res, next, false))?.dataValues?.role_id;
            role = (await super.getOne('roles', { id: role }, req, res, next, false))?.dataValues?.name;
            if (role !== 'admin') 
                return next(ApiErrors.badRequest('У вас недостаточно полномочий'));

            const task = await super.add('tasks', pool, req, res, next, false);
            res.status(200)
                .json({
                    message: 'Задача успешно создана',
                    id: task.dataValues.id
                })
        } catch(error) {
            console.log(error)
            next(ApiErrors.badRequest('Ошибка при создании задачи'));
        }
    }

    async delete(req, res, next) {
        try {
            const pool = req.body;
            const user = res.user;
            helperService.itContains(pool, ['id'], next);

            let role = (await super.getOne('users', { login: user.login }, req, res, next, false))?.dataValues?.role_id;
            role = (await super.getOne('roles', { id: role }, req, res, next, false))?.dataValues?.name;
            if (role !== 'admin')
                return next(ApiErrors.badRequest('У вас недостаточно полномочий'));

            const task = await super.delete('tasks', { id: pool.id }, req, res, next, false);
            res.status(200)
                .json({
                    message: 'Задача успешно удалена',
                    id: pool.id
                })
        } catch(error) {
            console.log(error)
            next(ApiErrors.badRequest('Ошибка при удалении задачи'));
        }
    }
}

module.exports = new TasksController();
