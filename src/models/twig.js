const mongoose = require('mongoose');

const Twig = mongoose.model('Twig', {
    timestamp: Date,
    payload: {},
    accountID: String,
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
