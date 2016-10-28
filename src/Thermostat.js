function Thermostat() {
  this.temperature = 20;
  this.MINIMUMTEMP = 10;
  this.powersaver = true;
  this.maximumtemp = 25;
}

Thermostat.prototype.up = function () {
  if (this.temperature >= this.maximumtemp) {
    return('Stop it, you\'re ruining the planet!');
  } else {
    this.temperature ++;
    return this.temperature;
  }
};

Thermostat.prototype.down = function () {
  if (this.temperature <= this.MINIMUMTEMP ) {
    return 10;
  } else {
    this.temperature --;
  return this.temperature;
}
};

Thermostat.prototype.setPowersaverOn = function () {
  this.powersaver = true;
  this._changeMaxTemp();
};

Thermostat.prototype.setPowersaverOff = function () {
  this.powersaver = false;
  this._changeMaxTemp();
};

Thermostat.prototype._changeMaxTemp = function () {
  if (this.powersaver === true) {
    this.maximumtemp = 25;
  } else {
    this.maximumtemp = 32;
  }
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.usage = function () {
  if (this.temperature <= 18) {
    return 'Low-usage';
  }else if (this.temperature >= 26) {
    return 'High-usage';
  }else{
    return 'Medium-usage';
  }
};
