const ApiErrors = require('../errors/ApiErrors');
const helperService = require('../services/HelperService');

class TasksController extends require('./BaseController') {
    constructor() {
        super();
    }

    async get(req, res, next) {
        try {
            const id = req.query?.id;
            let tasks;
            if (!id) tasks = await super.getAll('tasks', {}, req, res, next, false);
            else tasks = await super.getAll('tasks', { id: id }, req, res, next, false);

            res.status(200)
                .json({
                    message: 'Задачи успешно получены',
                    tasks
                })
        } catch(error) {
            console.log(error)
            next(ApiErrors.badRequest('Ошибка при получении задач'));
        }
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
            res.redirect('/home');
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

            const ans = await super.getAll('answers', {task_id: pool.id}, req, res, next, false);
            ans.forEach(element => {
                const id = (element.dataValues.id);
                super.delete('answers', { id: id}, req, res, next, false);
            });
            const task = await super.delete('tasks', { id: pool.id }, req, res, next, false);
            window.location.href='http://localhost:5000/home';
        } catch(error) {
            next(ApiErrors.badRequest('Ошибка при удалении задачи'));
        }
    }
}

module.exports = new TasksController();