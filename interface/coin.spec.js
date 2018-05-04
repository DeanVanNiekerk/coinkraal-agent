
var Coin = require('./Coin');
var MockAgent = require('../mocks/mock-agent')

describe('Coin', function () {

    it('getCoinLinks', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new Coin(agent);
        
        var symbol = 'BTC';

        //When: 
        var promise = api.getCoinLinks(symbol);

        //Then:
        promise.then((url) => {
           
            expect(url).toBe(`/api/coins/${symbol}/links`);

            done();
        })

    });

    it('getGlobalData', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new Coin(agent);
        
        //When: 
        var promise = api.getGlobalData();

        //Then:
        promise.then((url) => {
           
            expect(url).toBe(`/api/coins/globaldata`);

            done();
        })

    });

    it('getCoinLogo', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new Coin(agent);
        
        var symbol = 'BTC';

        //When: 
        var promise = api.getCoinLogo(symbol);

        //Then:
        promise.then((url) => {
           
            expect(url).toBe(`/api/coins/${symbol}/logo`);

            done();
        })

    });

})