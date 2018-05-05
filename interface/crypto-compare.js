

class CryptoCompare {

    constructor(agent) {
        this.agent = agent;
        this.apiRoot = 'https://min-api.cryptocompare.com';
    }

    getHistoricalPrice(fromCurrency, toCurrency, timestamp) {
        return this.agent.requests.get(`${this.apiRoot}/data/pricehistorical?fsym=${this.fixSym(fromCurrency)}&tsyms=${this.fixSym(toCurrency)}&ts=${timestamp}`)
            .then(body => body[this.fixSym(fromCurrency)][this.fixSym(toCurrency)]);
    }

    getHistoricalPriceByFrequency(fromCurrency, toCurrency, limit, frequency) {
        if (frequency == 'days')
            return this.getDailyHistoricalPrice(fromCurrency, toCurrency, limit);
        return this.getHourlyHistoricalPrice(fromCurrency, toCurrency, limit);
    }

    getDailyHistoricalPrice(fromCurrency, toCurrency, limit) {
        return this.agent.requests.get(`${this.apiRoot}/data/histoday?fsym=${this.fixSym(fromCurrency)}&tsym=${this.fixSym(toCurrency)}&limit=${limit}`)
            .then(body => body.Data);
    }

    getHourlyHistoricalPrice(fromCurrency, toCurrency, limit) {
        return this.agent.requests.get(`${this.apiRoot}/data/histohour?fsym=${this.fixSym(fromCurrency)}&tsym=${this.fixSym(toCurrency)}&limit=${limit}`)
            .then(body => body.Data);
    }

    get24HrPriceChange(fromCurrency, toCurrency) {
        return this.agent.requests.get(`${this.apiRoot}/data/pricemultifull?fsyms=${this.fixSym(fromCurrency)}&tsyms=${this.fixSym(toCurrency)}`)
            .then(body => body.RAW[this.fixSym(fromCurrency)] ? body.RAW[fixSym(fromCurrency)][this.fixSym(toCurrency)].CHANGEPCT24HOUR : null)
    }

    getCoinExchanges(fromCurrency, toCurrency, limit) {
        return this.agent.requests.get(`${this.apiRoot}/data/top/exchanges/full?fsym=${this.fixSym(fromCurrency)}&tsym=${this.fixSym(toCurrency)}&limit=${limit}`)
            .then(body => body.Data.Exchanges);
    }

    getPrice(fromCurrency, toCurrencies) {
        return this.agent.requests.get(`${this.apiRoot}/data/price?fsym=${this.fixSym(fromCurrency)}&tsyms=${this.fixSyms(toCurrencies).join(',')}`);
    }


    //These fix functions are needed because CryptoCompare and CoinMarketCap use different symbols for some coins .... meh
    fixSyms(symbols) {
        return symbols.map(this.fixSym);
    }

    fixSym(symbol) {
        if (symbol == 'MIOTA') return 'IOTA';
        if (symbol == 'NANO') return 'XRB';
        return symbol;
    }

    fixSymInv(symbol) {
        if (symbol == 'IOTA') return 'MIOTA';
        if (symbol == 'XRB') return 'NANO';
        return symbol;
    }

}

module.exports = CryptoCompare;