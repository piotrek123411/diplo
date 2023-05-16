require('dotenv')
    .config();

const config = {
    PORT: process.env.PORT || 5000,
    HOST: process.env.HOST || 'localhost'
};

module.exports = config;