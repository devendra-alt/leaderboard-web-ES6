import renderScores from './render.js';

class Game {
  #GAME_ID;

  #URL_ENDPOINT;

  constructor() {
    this.#GAME_ID = 'IIAuaFWhKHWwhkvhf6bC';
    this.#API_ENDPOINT = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${
      this.#GAME_ID
    }/scores`;
  }

  async getScores() {
    try {
      const respons = await fetch(this.#URL_ENDPOINT);
      if (respons.status === 200) {
        const data = await respons.json();
        renderScores(data.result);
        return;
      }
      throw new Error('unable to fetch data');
    } catch (error) {
      throw new Error('unknown error');
    }
  }

  async setScore(...data) {
    const respons = await fetch(this.#URL_ENDPOINT, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      method: 'POST',
      body: JSON.stringify({
        user: data[0],
        score: data[1],
      }),
    });
    return respons;
  }
}

export default Game;
