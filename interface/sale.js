

class Sale {

    constructor(agent) {
        this.agent = agent;
    }

    add(transactionId, sale) {
        return this.agent.requests.post(`/api/transactions/${transactionId}/sales/add`, sale);
    }

    update(transactionId, sale) {
        return this.agent.requests.put(`/api/transactions/${transactionId}/sales/update`, sale);
    }

    remove(transactionId, saleId) {
        return this.agent.requests.del(`/api/transactions/${transactionId}/sales/remove?id=${saleId}`);
    }

}

module.exports = Sale;