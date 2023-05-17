const config = require('../../config');

class Server {
    constructor(app) {
        this.server = require('http')
            .createServer(app);
    }

    start() {
        this.server.listen(config.PORT, () => {
            console.log(`\nServer started on ${config.HOST}:${config.PORT}`)
        });
    }
}

module.exports = Server;