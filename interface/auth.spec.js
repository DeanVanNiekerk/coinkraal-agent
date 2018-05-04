
var Auth = require('./auth');
var MockAgent = require('../mocks/mock-agent')

describe('Auth', function () {

    it('googleLogin()', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new Auth(agent);

        //When: 
        var promise = api.googleLogin('12345');

        //Then:
        promise.then((data) => {
           
            expect(data.url).toBe('/auth/signin/google');
            expect(data.body).toEqual({ token: '12345' });

            done();
        })

    });

    it('facebookLogin()', function (done) {

        //Given:
        var agent = new MockAgent();
        var api = new Auth(agent);

        //When: 
        var promise = api.facebookLogin('1234', 'dean@email.com', 'abcd', 'Dean', 'https://picture');

        //Then:
        promise.then((data) => {
           
            expect(data.url).toBe('/auth/signin/facebook');
            expect(data.body).toEqual({ accessToken: '1234', email: 'dean@email.com', userId: 'abcd', name: 'Dean', picture: 'https://picture' });

            done();
        })

    });

})