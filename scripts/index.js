const app = () => {

  const startHandler = () => {
    const scriptEl = document.createElement('script');
    scriptEl.src = './scripts/distance-counter.js';
    document.body.append(scriptEl);
    const children = document.body;
    console.log(children);
    startBtn.class = 'invisible';
  };

  const pausedHandler = () => {
    const elem = document.body.querySelector('#distanceinkm');
    const alterElem = document.body.querySelector('#alter-distanceinkm');
    elem.id = 'alter-distanceinkm';
    alterElem.id = 'distanceinkm';
  }; 
  
  const returnHandler = () => {
    const elem = document.body.querySelector('#alter-distanceinkm');
    const alterElem = document.body.querySelector('#distanceinkm');
    elem.id = 'distanceinkm';
    alterElem.id = 'alter-distanceinkm';
  };

  const startBtn = document.querySelector('#start');
  const pauseBtn = document.querySelector('#pause');
  const returnBtn = document.querySelector('#return');

  startBtn.addEventListener('click', startHandler);
  pauseBtn.addEventListener('click', pausedHandler);
  returnBtn.addEventListener('click', returnHandler);
};

app();