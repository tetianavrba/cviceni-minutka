const zazvon = () => {
  const alarmElement = document.querySelector('.alarm');
  alarmElement.classList.add('alarm--ring');
  const audioElement = document.querySelector('audio');
  audioElement.play();
};

const sekundy = Number(
  prompt('Kolik vteřin má uplynout než minutka začne zvonit?'),
);

const vysledek = setTimeout(zazvon, sekundy * 1000);

const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', () => {
  clearTimeout(vysledek);
});
