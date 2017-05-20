require('../base.spec');

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

const app = require('../../src/server');
const Twig = require('../../src/models/twig');

chai.use(chaiHttp);

describe('Twigs', () => {
    beforeEach(async () => {
        return await Twig.remove({});
    });

    describe('New Twig', () => {
        it('should work', async () => {
            const response = await chai.request(app)
                .post('/twigs')
                .send({
                    payload: {
                        param: 'hooray',
                        number: 2,
                        list: [1, 2, 3],
                    },
                    accountID: '123',
                });
            expect(response).to.have.status(201);
        });

        it('should create and save new twigs', async () => {
            const response = await chai.request(app)
                .post('/twigs')
                .send({
                    payload: {
                        param: 'hooray',
                        number: 2,
                        list: [1, 2, 3],
                    },
                    accountID: '123',
                });

            expect(response).to.have.status(201);
            const newTwig = await Twig.findOne({
                accountID: '123',
            });
            expect(newTwig).to.not.be.null;
        });
    });
});
