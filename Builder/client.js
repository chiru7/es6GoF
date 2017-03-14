const WizardBuilder = require('./wizardBuilder');
const FighterBuilder = require('./fighterBuilder');
const Director = require('./director');

let builder = new WizardBuilder();
let director = new Director(builder);
director.construct();
builder.getPlayer().battle();

console.log('-- job change --');

builder = new FighterBuilder();
director = new Director(builder);
director.construct();
builder.getPlayer().battle();
