const app = require('express')();

app.use(require('cors')());
app.use(require('body-parser').urlencoded({ extended: false }))
app.use(require('body-parser').json())
app.use(require('express').static(require('path').join(__dirname, '..', 'public')));
app.use('/api/public', require('../config/routes/publicRoutes'));
app.use('/api/private', require('./middlewares/authMiddleware'), require('../config/routes/privateRoutes'));
app.use('', require('../config/routes/clientPublicRoutes'));
app.use(require('./middlewares/errorHandlingMiddleware'));

const Server = require('./services/Server');
new Server(app).start();

