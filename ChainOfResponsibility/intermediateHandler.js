const IfHandler = require('./ifHandler');
const Rank = require('./rank');

class IntermediateHandler extends IfHandler {
  handleRequestImpl(request) {
    console.log('request.getRank() === Rank.INTERMEDIATE:', request.getRank() === Rank.INTERMEDIATE);
    return request.getRank() === Rank.INTERMEDIATE;
  }
}

module.exports = IntermediateHandler;
