const listEl = document.querySelector('#score-btn');
const userNameField = document.querySelector('#name');
const scoreField = document.querySelector('#score');
const initScoreSubmit = (game) => {
  listEl.addEventListener('click', (e) => {
    e.preventDefault();
    const userName = userNameField.value;
    const score = scoreField.value;
    game.setScore(userName, score).then((result) => {
      if (result.status === 201) {
        game.getScores();
      }
    });
  });
};

export default initScoreSubmit;
