const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const api = require('../api');
let config;
switch (process.env.TWIG_ENV) {
    case 'PROD':
        config = require('../../config/default');
        break;
    case 'DEV':
        config = require('../../config/dev');
        break;
    case 'TEST':
        config = require('../../config/test');
        break;
    default:
        config = require('../../config/dev');
        break;
}

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

app.use('/', api);

mongoose.Promise = Promise;

mongoose.connect(config.dbHost)
    .then(() => {
        return app.listen(config.port);
    })
    .catch((err) => {
        console.log(`failed to start server: ${err}`);
    });

module.exports = app;
