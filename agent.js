
var _superagent = require('superagent')
var superagentPromise = require('superagent-promise')


class Agent {

    constructor(apiRoot, tokenHandler, errorHandler) {

        this.superagent = superagentPromise(_superagent, global.Promise);

        this.requests = {
            del: url =>
                this.superagent
                    .del(`${apiRoot}${url}`)
                    .use(tokenHandler)
                    .end(errorHandler)
                    .then(this.responseBody),
            get: url =>
                this.superagent
                    .get(`${apiRoot}${url}`)
                    .use(tokenHandler)
                    .end(errorHandler)
                    .then(this.responseBody),
            getText: url =>
                this.superagent
                    .get(`${apiRoot}${url}`)
                    .use(tokenHandler)
                    .end(errorHandler)
                    .then(this.responseText),
            put: (url, body) =>
                this.superagent
                    .put(`${apiRoot}${url}`, body)
                    .use(tokenHandler)
                    .end(errorHandler)
                    .then(this.responseBody),
            post: (url, body) =>
                this.superagent
                    .post(`${apiRoot}${url}`, body)
                    .use(tokenHandler)
                    .end(errorHandler)
                    .then(this.responseBody),
        };


    }

    responseBody = res => res.body;
    responseText = res => res.text;

}

module.exports = Agent;