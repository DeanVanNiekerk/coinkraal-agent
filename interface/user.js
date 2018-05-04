
class User {

    constructor(agent) {
        this.agent = agent;
    }

    getUser() {
        return this.agent.requests.get(`/api/user`);
    }

    updateSettings(settings) {
        return this.agent.requests.post(`/api/user/settings`, settings);
    }

}

module.exports = User;