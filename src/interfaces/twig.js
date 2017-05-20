const Twig = require('../models/twig');

class TwigInterface {
    static async newTwig (data) {
        if (!TwigInterface.validateTwigData(data)) {
            throw new Error('invalid twig data');
        }
        
        const newTwig = new Twig(data);
        return newTwig.save();
    }

    static validateTwigData (data) {
        if (data.payload === undefined) {
            return false;
        }
        return true;
    }
}

module.exports = TwigInterface;
