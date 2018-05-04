
var _superagent = require('superagent')
var superagentPromise = require('superagent-promise')


class Agent {

    constructor(apiRoot, tokenHandler, errorHandler) {

        this.apiRoot = apiRoot;
        this.superagent = superagentPromise(_superagent, global.Promise);

        this.requests = {
            del: url =>
                this.superagent
                    .del(getApi(url))
                    .use(tokenHandler)
                    .end(errorHandler)
                    .then(this.responseBody),
            get: url =>
                this.superagent
                    .get(getApi(url))
                    .use(tokenHandler)
                    .end(errorHandler)
                    .then(this.responseBody),
            getText: url =>
                this.superagent
                    .get(getApi(url))
                    .use(tokenHandler)
                    .end(errorHandler)
                    .then(this.responseText),
            put: (url, body) =>
                this.superagent
                    .put(getApi(url), body)
                    .use(tokenHandler)
                    .end(errorHandler)
                    .then(this.responseBody),
            post: (url, body) =>
                this.superagent
                    .post(getApi(url), body)
                    .use(tokenHandler)
                    .end(errorHandler)
                    .then(this.responseBody),
        };
    }

    responseBody(res) {
        return res.body
    };

    responseText(res) {
        return res.text;
    }

    getApi(api) {
        if(api.indexOf('http') == -1)
            return `${this.apiRoot}${api}`;
        return api;
    }

}

module.exports = Agent;