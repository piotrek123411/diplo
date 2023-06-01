const tokenService = require('../services/TokenService');

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') next();

    const token = req.headers.authorization?.split(' ')?.[1];
    if (!token)
        return res.status(401).json({ message: 'Не авторизован' });

    const user = tokenService.validateAccessToken(token);
    if (!user)
        return res.status(401).json({ message: 'Токен не валидный' });

    res.user = user;
    next();
}