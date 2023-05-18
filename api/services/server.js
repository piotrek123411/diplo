const chalk = require('chalk');

const config = require('../../config');
const database = require('../../config/database');

class Server {
    constructor(app) {
        this.server = require('http')
            .createServer(app);
    }

    connect() {
        database
            .authenticate()
            .then(() => {
                console.log(
                    'Database connection: ' +
                    chalk.green('established successfully\n')
                );   
            })
            .catch(error => {
                console.log(
                    chalk.red(`Fail connecting to database:\n${error}\n`)
                );
            });
    }

    start() {
        this.server.listen(config.PORT, () => {
            console.log(`\nServer started on ${config.HOST}:${config.PORT}`);
            this.connect();
        });
    }
}

module.exports = Server;