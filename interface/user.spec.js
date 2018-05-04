
var User = require('./User');
var MockAgent = require('../mocks/mock-agent')

describe('User', function () {

    it('getUser', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new User(agent);
        
        //When: 
        var promise = api.getUser();

        //Then:
        promise.then((url) => {
           
            expect(url).toBe(`/api/user`);

            done();
        })

    });

    it('updateSettings', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new User(agent);

        var s = {
            'setting1': '123'
        }
        
        //When: 
        var promise = api.updateSettings(s);

        //Then:
        promise.then((data) => {
           
            expect(data.url).toBe(`/api/user/settings`);
            expect(data.body).toEqual(s);

            done();
        })

    });

})