const { expect } = require('chai');
const sendRequest = require('../lib/sendRequest');
const data = require('../data/getComment');
const env = require('../endpoint/test');

describe('Get Comment by id', () => {
    let response;

    before(async () => {
        data.uri = env.uri + data.uri;
        response = await sendRequest(data);
    });

    it('Verifying status code is 200 ', () => {
        expect(response.status).to.eql(200);
    });

    it('Verifying content-type header is application/json; charset=utf-8', () => {
        expect(response.headers['content-type']).to.eql('application/json; charset=utf-8');
    });

    it('Verifying response body', () => {
        expect(response.data.length).to.eql(10);
    });
});