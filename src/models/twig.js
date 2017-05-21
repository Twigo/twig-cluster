const mongoose = require('mongoose');

const Twig = mongoose.model('Twig', {
    payload: {},
    element: String,
    event: {
        type: String,
        required: true,
    },
    attribution: {
        userID: {
            type: String,
            required: true,
            index: true,
        },
        accountID: {
            type: String,
            required: true,
            index: true,
        },
        referrer: String,
    },
    context: {
        timestamp: {
            type: Date,
            required: true,  
        },
        language: String,
        platform: String,
        browser: String,
    },
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
