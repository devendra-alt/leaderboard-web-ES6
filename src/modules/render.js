const leaderBoardList = document.querySelector('#leader-board-list');
const createListItem = (userData) => {
  const scoreListItemEl = document.createElement('li');
  const userScoreEl = document.createElement('p');
  scoreListItemEl.classList.add('score-list-item');
  userScoreEl.innerText = `${userData[0]} : ${userData[1]}`;
  scoreListItemEl.appendChild(userScoreEl);
  leaderBoardList.appendChild(scoreListItemEl);
};

const renderScores = (game) => {
  leaderBoardList.innerHTML = '';
  game.forEach((element) => {
    const userData = Object.values(element).reverse();
    createListItem(userData);
  });
};

export default renderScores;
