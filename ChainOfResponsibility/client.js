const AdvancedHandler = require('./advancedHandler');
const IntermediateHandler = require('./intermediateHandler');
const BeginnerHandler = require('./beginnerHandler');
const Request = require('./request');
const Rank = require('./rank');

const advancedHandler = new AdvancedHandler();
const intermediateHandler = new IntermediateHandler();
const beginnerHandler = new BeginnerHandler();
advancedHandler.setNext(intermediateHandler).setNext(beginnerHandler);
advancedHandler.handleRequest(new Request(Rank.BEGINNER));
advancedHandler.handleRequest(new Request(Rank.ADVANCED));
advancedHandler.handleRequest(new Request(Rank.UNKNOWN));
