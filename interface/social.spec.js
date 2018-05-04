
var Social = require('./Social');
var MockAgent = require('../mocks/mock-agent')

describe('Social', function () {

    it('getRedditContent', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new Social(agent);
        
        var urlInput = 'http://someurl.com';

        //When: 
        var promise = api.getRedditContent(urlInput);

        //Then:
        promise.then((url) => {
           
            expect(url).toBe(`/api/social/reddit?url=${encodeURIComponent(urlInput)}`);

            done();
        })

    });

})