
class Coin {

    constructor(agent) {
        this.agent = agent;
    }

    getCoinLinks(symbol) {
        return this.agent.requests.get(`/api/coins/${symbol}/links`);
    }
  
    getCoinLogo(symbol) {
        return this.agent.requests.get(`/api/coins/${symbol}/logo`);
    }

    getGlobalData() {
        return this.agent.requests.get(`/api/coins/globaldata`);
    }
}

module.exports = Coin;