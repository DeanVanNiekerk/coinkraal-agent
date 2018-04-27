

class Auth {

    constructor(agent) {
        this.agent = agent;
    }


    googleLogin(googleTokenId) {
        return this.agent.requests.post('/auth/signin/google', { token: googleTokenId })
    }
  
    facebookLogin(accessToken, email, userID, name, picture) {
        return this.agent.requests.post('/auth/signin/facebook', { accessToken: accessToken, email: email, userId: userID, name: name, picture: picture })
    }

}

module.exports = Auth;