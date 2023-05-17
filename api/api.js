const app = require('express')();

app.use(require('cors')());
app.use(require('express').json());
app.use('/api/public', require('../config/routes/publicRoutes'));
app.use('/api/private', require('../config/routes/privateRoutes'));
app.use(require('./middlewares/errorHandlingMiddleware'));

const Server = require('./services/Server');
new Server(app).start();

