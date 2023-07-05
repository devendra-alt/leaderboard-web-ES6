import './styles/reset.css';
import './styles/style.css';
import Game from './modules/game.js';
import renderScores from './modules/render.js';

const game = new Game();
renderScores(game);
