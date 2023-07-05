class Game {
  #scores;

  constructor() {
    this.#scores = [
      {
        Name: 100,
      },
      {
        Name: 20,
      },
      {
        Name: 50,
      },
      {
        Name: 78,
      },
      {
        Name: 125,
      },
      {
        Name: 77,
      },
      {
        Name: 42,
      },
    ];
  }

  getScores = () => this.#scores;
}

export default Game;
