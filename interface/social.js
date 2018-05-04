
class Social {

    constructor(agent) {
        this.agent = agent;
    }

    getRedditContent(url) {
        return this.agent.requests.getText(`/api/social/reddit?url=${encodeURIComponent(url)}`)
    }

}

module.exports = Social;