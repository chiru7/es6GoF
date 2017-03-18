const IfHandler = require('./ifHandler');
const Rank = require('./rank');

class AdvancedHandler extends IfHandler {
  handleRequestImpl(request) {
    console.log('request.getRank() === Rank.ADVANCED:', request.getRank() === Rank.ADVANCED);
    return request.getRank() === Rank.ADVANCED;
  }
}

module.exports = AdvancedHandler;
