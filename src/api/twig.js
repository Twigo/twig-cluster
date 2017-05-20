const app = require('express')();

const TwigInterface = require('../interfaces/twig');

app.post('/', async (req, res) => {
    try {
        const newTwig = await TwigInterface.newTwig(req.body);
        res.sendStatus(201);
    } catch (err) {
        console.log(`error creating twig: ${err}`);
        res.sendStatus(500);
    }
});

module.exports = app;
