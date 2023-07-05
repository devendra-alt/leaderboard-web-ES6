const listEl = document.querySelector('#score-btn');
const userNameField = document.querySelector('#name');
const scoreField = document.querySelector('#score');
const initScoreSubmit = (game) => {
  listEl.addEventListener('click', (e) => {
    e.preventDefault();
    let userName = userNameField.value;
    let score = scoreField.value;
    game.setScore(userName, score).then((result) => {
      if (result.status === 201) {
        game.getScores();
      }
    });
  });
};

export default initScoreSubmit;
