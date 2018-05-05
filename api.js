
var Agent = require('./agent')

var Auth = require('./interface/auth')
var Coin = require('./interface/coin')
var CoinMarketCap = require('./interface/coin-market-cap')
var CryptoCompare = require('./interface/crypto-compare')
var Sale = require('./interface/sale')
var Social = require('./interface/social')
var Transaction = require('./interface/transaction')
var User = require('./interface/user')

class Api {

    constructor(apiRoot, tokenHandler, errorHandler) {

        let agent = new Agent(apiRoot, null, errorHandler);
        let agentAuth = new Agent(apiRoot, tokenHandler, errorHandler);
        
        this.Auth = new Auth(agentAuth);
        this.Coin = new Coin(agentAuth);
        this.Sale = new Sale(agentAuth);
        this.Social = new Social(agentAuth);
        this.Transaction = new Transaction(agentAuth);
        this.User = new User(agentAuth);

        this.CoinMarketCap = new CoinMarketCap(agent);
        this.CryptoCompare = new CryptoCompare(agent);
    }
}

module.exports = Api;