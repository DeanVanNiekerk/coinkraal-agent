
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

        let agent = new Agent(apiRoot, tokenHandler, errorHandler);
        
        this.Auth = new Auth(agent);
        this.Coin = new Coin(agent);
        this.CoinMarketCap = new CoinMarketCap(agent);
        this.CryptoCompare = new CryptoCompare(agent);
        this.Sale = new Sale(agent);
        this.Social = new Social(agent);
        this.Transaction = new Transaction(agent);
        this.User = new User(agent);
    }
}

module.exports = Api;