export const globalMessageCreater = () => {
  const messageBoxEl = document.createElement('p');
  messageBoxEl.id = 'message-context';
  messageBoxEl.classList.add('global-message-context', 'hide');
  messageBoxEl.innerText = '';
  leaderBoardEl.prepend(messageBoxEl);
  globalMessageActionListner();
};
