import { showMessageData } from './messages.js';
import renderScores from './render.js';

class Game {
  #GAME_ID;

  #API_ENDPOINT;

  constructor() {
    this.#GAME_ID = 'IIAuaFWhKHWwhkvhf6bC';
    this.#API_ENDPOINT = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${
      this.#GAME_ID
    }/scores`;
  }

  async getScores() {
    try {
      const respons = await fetch(this.#API_ENDPOINT);
      if (respons.ok) {
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
    try {
      const response = await fetch(this.#API_ENDPOINT, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        method: 'POST',
        body: JSON.stringify({
          user: data[0],
          score: data[1],
        }),
      });

      if (!response.ok) {
        throw new Error(data.message);
      }

      const responseData = await response.json();
      showMessageData(responseData.result, 'success');
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default Game;
