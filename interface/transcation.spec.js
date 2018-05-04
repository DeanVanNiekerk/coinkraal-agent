
var Transaction = require('./Transaction');
var MockAgent = require('../mocks/mock-agent')

describe('Transaction', function () {

    it('getTransactions', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new Transaction(agent);

        //When: 
        var promise = api.getTransactions();

        //Then:
        promise.then((url) => {
           
            expect(url).toBe('/api/transactions');

            done();
        })

    });

    it('add', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new Transaction(agent);

        var t = {
            id: '1234'
        };

        //When: 
        var promise = api.add(t);

        //Then:
        promise.then((data) => {
           
            expect(data.url).toBe('/api/transactions/add');
            expect(data.body).toEqual(t);

            done();
        })

    });

    it('update', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new Transaction(agent);

        var t = {
            id: '1234'
        };

        //When: 
        var promise = api.update(t);

        //Then:
        promise.then((data) => {
           
            expect(data.url).toBe('/api/transactions/update');
            expect(data.body).toEqual(t);

            done();
        })

    });


    it('remove', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new Transaction(agent);

        var id = '1234';

        //When: 
        var promise = api.remove(id);

        //Then:
        promise.then((url) => {
           
            expect(url).toBe(`/api/transactions/remove?id=${id}`);

            done();
        })

    });

})