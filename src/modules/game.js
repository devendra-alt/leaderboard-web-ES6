class Game {
  #GAME_ID;
  #URL_ENDPOINT;
  constructor() {
    this.#GAME_ID = 'El0O6fUr7GdLZJ5Aoxwm';
    this.#URL_ENDPOINT = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${
      this.#GAME_ID
    }/scores`;
  }
  getScores() {
    fetch(this.#URL_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        renderScores(data.result);
      });
  }
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
