<<<<<<< HEAD
import './css/style.css';
import { renderBlockChoice, renderScreenChoice } from './mainScreen';

window.application = {
  blocks: {},
  screens: {},
  renderScreen: function (screenName) {
    this.screens[screenName]();
  },
  renderBlock: function (blockName, container) {
    this.blocks[blockName](container);
  },
  levels: [],
  timers: [],
  stopInterval: function () {
    this.timers.forEach((timer) => {
      clearInterval(timer);
    });
  },
  time: '',
};

window.application.blocks['blockChoice'] = renderBlockChoice;
window.application.screens['screenChoice'] = renderScreenChoice;
window.application.renderScreen('screenChoice');
=======
const APP = document.querySelector('.app');

window.application = {
    blocks: {},
    screens: {},
    timers: [],
    difficultyLevel: Number,
    renderScreen: function (screenName) {
        if (window.application.screens[screenName]) {
            APP.innerHTML = '';
            window.application.screens[screenName]();
        } else {
            console.warn(`Экрана ${screenName} не существует`);
        }
    },
    renderBlock: function (blockName, container) {
        if (window.application.blocks[blockName]) {
            window.application.blocks[blockName](container);
        } else {
            console.warn(`Блока ${blockName} не существует`);
        }
    },
};
>>>>>>> c6d7b760f1b094190af368a34920574061e95dbb
