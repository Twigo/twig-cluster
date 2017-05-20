const app = require('express')();

const twigApp = require('./twig');

app.use('/twigs', twigApp);

module.exports = app;
