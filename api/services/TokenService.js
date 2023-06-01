const jwt = require('jsonwebtoken');

require('dotenv')
    .config();

class TokenService {
    generate(pool) {
        return jwt.sign(
            pool,
            process.env.JWT_SECRET_KEY,
            { expiresIn: '24h' }
        );
    }

    validateAccessToken(token) {
        try {
            const result = jwt.verify(token, process.env.JWT_SECRET_KEY);
            return result;
        } catch(error) {
            return;
        }
    }

    refreshAccessToken(token) {
        const payload = this.validateAccessToken(token);
        if (!payload)
            return;
        return this.generate({ user_id: payload.id, login: payload.login });
    }
}

module.exports = new TokenService();