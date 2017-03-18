const Rank = require('./rank');
const RankPlain = require('./rankPlain');

console.log('Rank:', Rank);
console.log('RankPlain:', RankPlain);

console.log('Rank.contains(Rank.BEGINNER):', Rank.contains(Rank.BEGINNER));
console.log('RankPlain.contains(RankPlain.BEGINNER):', RankPlain.contains(RankPlain.BEGINNER));

console.log('Rank.contains(RankPlain.BEGINNER):', Rank.contains(RankPlain.BEGINNER));
console.log('RankPlain.contains(Rank.BEGINNER):', RankPlain.contains(Rank.BEGINNER));

console.log('Rank.BEGINNER:', Rank.BEGINNER);
console.log('RankPlain.BEGINNER:', RankPlain.BEGINNER);

console.log('Rank.BEGINNER.valueOf():', Rank.BEGINNER.valueOf());
console.log('RankPlain.BEGINNER.valueOf():', RankPlain.BEGINNER.valueOf());

console.log('Rank.BEGINNER.valueOfValue():', Rank.BEGINNER.valueOfValue());
// console.log('RankPlain.BEGINNER.valueOfValue():', RankPlain.BEGINNER.valueOfValue()); // undefined function

console.log('Rank.BEGINNER.valueOfOrder():', Rank.BEGINNER.valueOfOrder());
// console.log('RankPlain.BEGINNER.valueOfOrder():', RankPlain.BEGINNER.valueOfOrder()); // undefined function
