const Enum = require('./enum');
const FactoryMaker = require('./factoryMaker');

const Rank = new Enum({
  UNKNOWN: { value: 0, order: 0 },
  BEGINNER: { value: 1, order: 10 },
  ELEMENTARY: { value: 2, order: 20 },
  PRE_INTERMEDIATE: { value: 3, order: 30 },
  INTERMEDIATE: { value: 4, order: 40 },
  UPPER_INTERMEDIATE: { value: 5, order: 50 },
  ADVANCED: { value: 6, order: 60 },
}, FactoryMaker.getFactory('Rank'));

module.exports = Rank;
