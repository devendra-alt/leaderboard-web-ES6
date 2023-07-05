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
  setScore(...data) {
    return fetch(this.#URL_ENDPOINT, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      method: 'POST',
      body: JSON.stringify({
        user: data[0],
        score: data[1],
      }),
    });
  }

  getScores = () => this.#scores;
}

export default Game;
