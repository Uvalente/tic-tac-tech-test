class Player {
  constructor(name, sign) {
    this._name = name;
    this._sign = sign;
  }

  get name() {
    return this._name;
  }

  get sign() {
    return this._sign;
  }
}

module.exports = Player;
