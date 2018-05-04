

class Transaction {

    constructor(agent) {
        this.agent = agent;
    }


    getTransactions() {
        return this.agent.requests.get(`/api/transactions`);
    }
  
    add(transaction) {
        return this.agent.requests.post('/api/transactions/add', transaction);
    }

    update(transaction) {
        return this.agent.requests.put('/api/transactions/update', transaction);
    }

    remove(transactionId) {
        return this.agent.requests.del(`/api/transactions/remove?id=${transactionId}`);
    }

}

module.exports = Transaction;