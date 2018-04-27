
var Agent = require('./agent')
var Auth = require('./interface/auth')

class Api {

    constructor(apiRoot, tokenHandler, errorHandler) {

        let agent = new Agent(apiRoot, tokenHandler, errorHandler);
        
        this.Auth = new Auth(agent);
    }
}

module.exports = Api;