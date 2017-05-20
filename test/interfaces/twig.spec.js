require('../base.spec');

const chai = require('chai');
const expect = chai.expect;

const Twig = require('../../src/models/twig');
const TwigInterface = require('../../src/interfaces/twig');

describe('TwigInterfaces', () => {
    beforeEach(async () => {
        return await Twig.remove({});
    });

    describe('New Twig', () => {
        it('create a new ', async () => {
            const _ = await TwigInterface.newTwig({
                payload: {
                    param: 'hooray',
                    number: 2,
                    list: [1, 2, 3],
                },
                accountID: '123',
            });
            const findTwig = await Twig.findOne();
            expect(findTwig).to.not.be.null;
            expect(findTwig.accountID).to.eql('123');
        });

        it('fails on invalid data', async () => {
            try {
                const _ = await TwigInterface.newTwig({
                    bad: 'data',
                });
                expect(true).to.eql(false);
            } catch (e) {
                expect(true).to.eql(true);
            }
        });
    });
});
