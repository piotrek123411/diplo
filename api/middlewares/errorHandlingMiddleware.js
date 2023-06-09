const ApiErrors = require('../errors/ApiErrors');

module.exports = (err, req, res, next) => {
    if (err instanceof ApiErrors)
        return res
            .status(err.status)
            .json({
                message: err.message
            });
    console.log(err);
    return res
        .status(500)
        .json({
            message: 'Непридвиденная ошибка'
        });
};