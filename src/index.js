import './styles/reset.css';
import './styles/style.css';
import Game from './modules/game.js';
import initScoreSubmit from './modules/initScoreSubmit.js';
import initRefreshBtn from './modules/initScoreRefresh.js';
import { globalMessageCreater } from './modules/messages.js';

const game = new Game();

game.getScores();

initScoreSubmit(game);
initRefreshBtn(game);
globalMessageCreater();
