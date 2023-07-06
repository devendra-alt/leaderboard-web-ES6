const listEl = document.querySelector('#score-btn');
const userNameField = document.querySelector('#name');
const scoreField = document.querySelector('#score');
const initScoreSubmit = (game) => {
  listEl.addEventListener('click', async (e) => {
    e.preventDefault();
    const userName = userNameField.value;
    const score = scoreField.value;
    userNameField.value = '';
    scoreField.value = '';
    try {
      const respons = await game.setScore(userName, score);
      const responsData = await respons.json();
      if (!responsData.message === 'Leaderboard score created correctly.') {
        throw new Error(responsData.message);
      }
    } catch (error) {
      throw new Error(error);
    }
  });
};

export default initScoreSubmit;
