//Открываем диалог с задержкой 10 сек
var timeUp = function () {
  alert('Время вышло!');
};

setTimeout(timeUp, 10000);

//таймер отсчета с шагом 10 сек
var counter = 1;
var printMessage = function () {
  console.log('Ты смотришь на монитору уже ' + counter + ' секунд');
  counter++;
};

//Подвижный текст
var intervalId = setInterval(printMessage, 1000);

var leftOffset = 0;
var moveHeading = function () {
  $('#heading').offset({ left: leftOffset });
  leftOffset++;
  if (leftOffset > 1000) {
    leftOffset = 0;
  }
};
setInterval(moveHeading, 2);
