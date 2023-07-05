import renderScores from './render';

const refreshBtn = document.querySelector('#refresh-btn');

const initRefreshBtn = (game) => {
  refreshBtn.addEventListener('click', () => {
    game.getScores();
  });
};

export default initRefreshBtn;
