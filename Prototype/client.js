const Screw = require('./screw');

const screw = new Screw(1, 6, 10);
screw.detail();
const screwClone = screw.clone();
screwClone.detail();
screw.cut();
screw.detail();
screwClone.detail();
