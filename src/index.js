class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.currentNumberGuess = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.currentNumberGuess = Math.round((this.min + this.max) / 2);
    return this.currentNumberGuess;
  }

  lower() {
    this.max = this.currentNumberGuess;
  }

  greater() {
    this.min = this.currentNumberGuess;
  }
}

module.exports = GuessingGame;
