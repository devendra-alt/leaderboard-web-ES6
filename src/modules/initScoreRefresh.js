const refreshBtn = document.querySelector('#refresh-btn');

const initRefreshBtn = (game) => {
  refreshBtn.addEventListener('click', async () => {
    await game.getScores();
  });
};

export default initRefreshBtn;
