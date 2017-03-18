const IfHandler = require('./ifHandler');
const Rank = require('./rank');

class BeginnerHandler extends IfHandler {
  handleRequestImpl(request) {
    console.log('request.getRank() === Rank.BEGINNER:', request.getRank() === Rank.BEGINNER);
    return request.getRank() === Rank.BEGINNER;
  }
}

module.exports = BeginnerHandler;
