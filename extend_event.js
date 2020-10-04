const EventEmitter = require('events');

const TransactionStates = {
    'INITIATED': "INITIATED",
    'ACCEPTED': "ACCEPTED",
    'REJECTED': "REJECTED",
    'SENT': "SENT",
}

class IntialisedTransaction extends EventEmitter {
    constructor(recipient, sender) {
        super();
        this._recipient = recipient;
        this._sender = sender;
        this._transaction_state = TransactionStates.INITIATED;
    }

    get recipient() {
        return this._recipient;
    }

    get transactionState() {
        return this._transaction_state;
    }

    set transactionState(state) {
        this._transaction_state = state;
    }


}

class StateChange {
    constructor(intialisedTransaction, state) {
        intialisedTransaction.transactionState = state;
    }
}

var intialisedTransaction = new IntialisedTransaction("George", "Michael");


console.log(intialisedTransaction.transactionState);

intialisedTransaction.on(TransactionStates.ACCEPTED, () => new StateChange(intialisedTransaction, TransactionStates.ACCEPTED));

intialisedTransaction.emit(TransactionStates.ACCEPTED)

console.log(intialisedTransaction.transactionState);