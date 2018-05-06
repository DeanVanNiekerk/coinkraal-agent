

class CoinMarketCap {

    constructor(agent) {
        this.agent = agent;
        this.apiRoot = 'https://api.coinmarketcap.com/v2';
    }

    getCoinTopList(start, limit) {
        return this.agent.requests.get(`${this.apiRoot}/ticker/?start=${start}&limit=${limit}`)
            .then(data => {

                let arr = [];
                let coins = data.data;

                for (let id in coins) {
                    if (coins.hasOwnProperty(id)) {
                        let c = coins[id];
                        let coin = {
                            name: c.name,
                            symbol: c.symbol,
                            rank: c.rank,
                            priceUsd: c.quotes.USD.price,
                            volumeUsd24h: c.quotes.USD.volume_24h,
                            marketCapUsd: c.quotes.USD.market_cap,
                            maxSupply: c.max_supply,
                            availableSupply: c.circulating_supply,
                            totalSupply: c.total_supply,
                            percentChange1h: c.quotes.USD.percent_change_1h,
                            percentChange24h: c.quotes.USD.percent_change_24h,
                            percentChange7d: c.quotes.USD.percent_change_7d
                        }

                        arr.push(coin);
                    }
                }
                return arr;

            });
    }

}

module.exports = CoinMarketCap;