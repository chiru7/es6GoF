const UnsupportedOperationError = require('../Error/unsupportedOperationError');

class IfHandler {
  constructor() {
    this.handler;
  }

  setNext(handler) {
    this.handler = handler;
    return handler;
  }

  handleRequestImpl(request) {
    throw new UnsupportedOperationError('function:handleRequestImpl need overriding by every class !!!');
  }

  handleRequest(request) {
    const isResolved = this.handleRequestImpl(request);
    if (this.handler && !isResolved) {
      this.handler.handleRequest(request);
    } else {
      console.log('chain end !!!');
    }
  }
}

module.exports = IfHandler;
