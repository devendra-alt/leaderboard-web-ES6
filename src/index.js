import './styles/reset.css';
import './styles/style.css';
import Game from './modules/game.js';
import initScoreSubmit from './modules/initScoreSubmit.js';
import initRefreshBtn from './modules/initScoreRefresh';

const game = new Game();

initScoreSubmit(game);
initRefreshBtn(game);
game.getScores();
