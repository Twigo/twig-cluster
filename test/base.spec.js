process.env.TWIG_ENV = 'TEST';

const chai = require('chai');
const should = chai.should();

describe('envcheck', () => {
    it('should set test env', () => {
        process.env.TWIG_ENV.should.eql('TEST');
    });
});
