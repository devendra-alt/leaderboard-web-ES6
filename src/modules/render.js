const leaderBoardList = document.querySelector('#leader-board-list');
const renderScores = (game) => {
  game.getScores().forEach((element) => {
    const scoreListItemEl = document.createElement('li');
    const userScoreEl = document.createElement('p');
    userScoreEl.innerText =
      Object.keys(element).toString() +
      ' : ' +
      Object.values(element).toString();
    scoreListItemEl.appendChild(userScoreEl);
    leaderBoardList.appendChild(scoreListItemEl);
  });
};

export default renderScores;
