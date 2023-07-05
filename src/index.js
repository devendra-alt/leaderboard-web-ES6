import './styles/reset.css';
import './styles/style.css';
import Game from './modules/game.js';
import initScoreSubmit from './modules/initScoreSubmit.js';

const game = new Game();
initScoreSubmit(game);
