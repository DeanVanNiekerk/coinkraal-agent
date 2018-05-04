
var Sale = require('./Sale');
var MockAgent = require('../mocks/mock-agent')

describe('Sale', function () {

    it('add', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new Sale(agent);

        var tId = 'abc';
        var s = {
            id: '1234'
        };

        //When: 
        var promise = api.add(tId, s);

        //Then:
        promise.then((data) => {
           
            expect(data.url).toBe(`/api/transactions/${tId}/sales/add`);
            expect(data.body).toEqual(s);

            done();
        })

    });

    it('update', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new Sale(agent);

        var tId = 'abc';
        var s = {
            id: '1234'
        };

        //When: 
        var promise = api.update(tId, s);

        //Then:
        promise.then((data) => {
           
            expect(data.url).toBe(`/api/transactions/${tId}/sales/update`);
            expect(data.body).toEqual(s);

            done();
        })
    });


    it('remove', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new Sale(agent);

        var tId = 'abc';
        var sId = '1234';

        //When: 
        var promise = api.remove(tId, sId);

        //Then:
        promise.then((url) => {
           
            expect(url).toBe(`/api/transactions/${tId}/sales/remove?id=${sId}`);

            done();
        })

    });

})