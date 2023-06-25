const ApiErrors = require('../errors/ApiErrors');
const helperService = require('../services/HelperService');
const validator = require('validator');

class AnswerController extends require('./BaseController') {
    constructor() {
        super();
    }

    async get(req, res, next) {
        try {
            const id = req.query?.id;
            let answers;
            if (!id) answers = await super.getAll('answers', {}, req, res, next, false);
            else answers = await super.getAll('answers', { id: id }, req, res, next, false);

            res.status(200)
                .json({
                    message: 'Ответы успешно получены',
                    answers
                })
        } catch(error) {
            console.log(error)
            next(ApiErrors.badRequest('Ошибка при получении ответов'));
        }
    }

    async create(req, res, next) {
        try {
            const pool = req.body;
            const user = res.user;
            helperService.itContains(pool, ['task_id', 'value'], next);

            if (!validator.isUUID(pool.task_id)) return next(ApiErrors.badRequest('Такой задачи не существует'));
            const tasks = (await super.getOne('tasks', {id: pool.task_id}, req, res, next, false))?.dataValues;
            if (!tasks) return next(ApiErrors.badRequest('Такой задачи не существует'));

            const answer = await super.add('answers', { user_id: user.id, ...pool }, req, res, next, false);
            window.location.href='http://localhost:5000/home';
        } catch(error) {
            console.log(error)
            next(ApiErrors.badRequest('Ошибка при создании ответа'));
        }
    }

    async setMark(req, res, next) {
        try {
            const id = req.query?.id;
            const pool = req.body;
            const user = res.user;
            helperService.itContains(pool, ['answer_id', 'mark'], next);

            let role = (await super.getOne('users', { login: user.login }, req, res, next, false))?.dataValues?.role_id;
            role = (await super.getOne('roles', { id: role }, req, res, next, false))?.dataValues?.name;
            if (role !== 'admin') 
                return next(ApiErrors.badRequest('У вас недостаточно полномочий'));

            if (!validator.isUUID(pool.answer_id)) return next(ApiErrors.badRequest('Такого ответа не существует'));
            let answer = (await super.getOne('answers', {id: pool.answer_id}, req, res, next, false))?.dataValues;
            if (!answer) return next(ApiErrors.badRequest('Такой задачи не существует'));

            answer = await super.update('answers', { mark: pool.mark }, { id: pool.answer_id }, req, res, next, false);
            res.redirect('/home');
        } catch(error) {
            console.log(error)
            next(ApiErrors.badRequest('Ошибка при выставлении оценки'));
        }
    }
}

module.exports = new AnswerController();