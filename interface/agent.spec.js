
var Agent = require('../agent');

describe('Agent', function () {

    it('getApi - use root', function () {

        //Given:
        var agent = new Agent('https:/root');

        var api = '/hi/there';

        //When: 
        var newApi = agent.getApi(api);

        //Then:
        expect(newApi).toEqual('https:/root/hi/there');

    });

    it('getApi - ignore root', function () {

        //Given:
        var agent = new Agent('https:/root');

        var api = 'https://newroot/hi/there';

        //When: 
        var newApi = agent.getApi(api);

        //Then:
        expect(newApi).toEqual('https://newroot/hi/there');

    });

})