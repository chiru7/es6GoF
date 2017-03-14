const IfPrototype = require('./ifPrototype');

class Screw extends IfPrototype {
  constructor(pitch, diameter, length) {
    super();
    this.pitch = pitch;
    this.diameter = diameter;
    this.length = length;
  }
  clone() {
    const screw = new Screw(this.pitch, this.diameter, this.length);
    return screw;
  }
  detail() {
    console.log(`pitch: ${this.pitch}, diameter: ${this.diameter}, length: ${this.length}`);
  }
  cut() {
    this.length = this.length / 2;
  }
}

module.exports = Screw;
