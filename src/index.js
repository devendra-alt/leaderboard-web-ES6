import './styles/reset.css';
import './styles/style.css';
import Game from './modules/game.js';
import renderScores from './modules/render';

const game = new Game();
renderScores(game);
