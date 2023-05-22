const bcrypt = require('bcrypt');

require('dotenv')
    .config();

class HashService {
    async getHashString(stringToHash) {
        return await bcrypt.hash(stringToHash, Number(process.env.PASSWORD_SALT));
    }

    async compare(string, hashString) {
        return await bcrypt.compare(string, hashString);
    }
}

module.exports = new HashService();