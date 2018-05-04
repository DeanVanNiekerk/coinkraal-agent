

class CoinMarketCap {

    constructor(agent) {
        this.agent = agent;
        this.apiRoot = 'https://api.coinmarketcap.com/v1';
    }

    getCoinTopList(start, limit) {
        return this.agent.requests.get(`${this.apiRoot}/ticker/?start=${start}&limit=${limit}`);
    }

}

module.exports = CoinMarketCap;