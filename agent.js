
var _superagent = require('superagent')
var superagentPromise = require('superagent-promise')


class Agent {

    constructor(apiRoot, tokenHandler, errorHandler) {

        this.apiRoot = apiRoot;

        this.tokenHandler = tokenHandler;
        this.errorHandler = errorHandler;

        this.superagent = superagentPromise(_superagent, global.Promise);

        this.requests = {
            del: url => this.defaultHanders(this.superagent.del(this.getApi(url))).then(this.responseBody),
            get: url => this.defaultHanders(this.superagent.get(this.getApi(url))).then(this.responseBody),
            getText: url => this.defaultHanders(this.superagent.get(this.getApi(url))).then(this.responseText),
            put: (url, body) => this.defaultHanders(this.superagent.put(this.getApi(url), body)).then(this.responseBody),
            post: (url, body) => this.defaultHanders(this.superagent.post(this.getApi(url), body)).then(this.responseBody),
        };
    }

    defaultHanders(a) {
        if(this.tokenHandler)
            a = a.use(this.tokenHandler);
        if(this.errorHandler)
            a = a.end(this.errorHandler);
        return a;
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