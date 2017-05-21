const mongoose = require('mongoose');

const Twig = mongoose.model('Twig', {
    payload: {},
    element: String,
    event: {
        type: String,
        required: true,
    },
    attribution: {},
    context: {},
});

Twig.serialize = function () {
    return {
        timestamp: this.timestamp,
        payload: this.payload,
        id: this._id,
        accountID: this.accountID,
    }
}

module.exports = Twig;
