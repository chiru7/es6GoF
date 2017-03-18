const UnsupportedOperationError = require('../Error/unsupportedOperationError');

const UNKNOWN = Symbol.for(0);
const BEGINNER = Symbol.for(1);
const ELEMENTARY = Symbol.for(2);
const PRE_INTERMEDIATE = Symbol.for(3);
const INTERMEDIATE = Symbol.for(4);
const UPPER_INTERMEDIATE = Symbol.for(5);
const ADVANCED = Symbol.for(6);
const RANK_LIST = [
  UNKNOWN,
  BEGINNER,
  ELEMENTARY,
  PRE_INTERMEDIATE,
  INTERMEDIATE,
  UPPER_INTERMEDIATE,
  ADVANCED,
];

class Rank {
  constructor() {
    throw new UnsupportedOperationError('Do not make instance !!!');
  }
  static get UNKNOWN() {
    return UNKNOWN;
  }
  static get BEGINNER() {
    return BEGINNER;
  }
  static get ELEMENTARY() {
    return ELEMENTARY;
  }
  static get PRE_INTERMEDIATE() {
    return PRE_INTERMEDIATE;
  }
  static get INTERMEDIATE() {
    return INTERMEDIATE;
  }
  static get UPPER_INTERMEDIATE() {
    return UPPER_INTERMEDIATE;
  }
  static get ADVANCED() {
    return ADVANCED;
  }
  static codeOf(rank) {
    if (!rank) {
      return UNKNOWN;
    }
    for (let i = 0; i < RANK_LIST.length; i += 1) {
      if (Symbol.keyFor(RANK_LIST[i]) === Symbol.keyFor(Symbol.for(rank))) {
        return RANK_LIST[i];
      }
    }
    return UNKNOWN;
  }
}

module.exports = Rank;
