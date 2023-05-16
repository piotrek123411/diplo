const cors = require('cors');

const app = require('express')();

const Server = require('./services/server');

const publicRoutes = require('../config/routes/publicRoutes');
const privateRoutes = require('../config/routes/privateRoutes');

app.use(cors());
app.use(require('express').json());
app.use('/api/public', publicRoutes);
app.use('/api/private', privateRoutes);

new Server(app).start();

