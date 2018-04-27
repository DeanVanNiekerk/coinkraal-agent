
class MockAgent {

    constructor() {

        this.requests = {
            del: url => {
                return new Promise((resolve, reject) => {
                    resolve(url);
                });
            },
            get: url => {
                return new Promise((resolve, reject) => {
                    resolve(url);
                });
            },
            getText: url => {
                return new Promise((resolve, reject) => {
                    resolve(url);
                });
            },
            put: (url, body) => {
                return new Promise((resolve, reject) => {
                    resolve({ url, body });
                });
            },
            post: (url, body) => {
                return new Promise((resolve, reject) => {
                    resolve({ url, body });
                });
            }
        };
    }
}

module.exports = MockAgent;