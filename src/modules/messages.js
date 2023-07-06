import xImg from '../assets/x.png';
const leaderBoardEl = document.querySelector('#leader-board');
const globalMessageActionListner = () => {
  leaderBoardEl.addEventListener('click', (e) => {
    if (e.target.getAttribute('global-message-exit') === 'exit-msg') {
      e.target.parentNode.classList.add('hide');
    }
  });
};

export const globalMessageCreater = () => {
  const messageBoxEl = document.createElement('p');
  messageBoxEl.id = 'message-context';
  messageBoxEl.classList.add('global-message-context', 'hide');
  messageBoxEl.innerText = '';
  leaderBoardEl.prepend(messageBoxEl);
  globalMessageActionListner();
};
