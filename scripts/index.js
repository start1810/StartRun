const app = () => {

  const startHandler = () => {
    if (runner.textContent === startText) {
      const scriptEl = document.createElement('script');
      scriptEl.src = './scripts/distance-counter.js';
      document.body.append(scriptEl);
      const children = document.body;
      console.log(children);
      runner.textContent = pausedText; 
    } else if (runner.textContent === pausedText) {
      const elem = document.body.querySelector('#distanceinkm');
      const alterElem = document.body.querySelector('#alter-distanceinkm');
      elem.id = 'alter-distanceinkm';
      alterElem.id = 'distanceinkm';
      runner.textContent = returnText;
    } else if (runner.textContent === returnText) {
      const elem = document.body.querySelector('#alter-distanceinkm');
      const alterElem = document.body.querySelector('#distanceinkm');
      elem.id = 'distanceinkm';
      alterElem.id = 'alter-distanceinkm';
      runner.textContent = pausedText;
    }
  };

  const runner = document.querySelector('#start');
  const startText = 'начать тренировку';
  const pausedText = 'пауза';
  const returnText = 'продолжить тренировку';
  runner.addEventListener('click', startHandler);
};

app();