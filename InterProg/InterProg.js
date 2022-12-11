//Открываем диалог с задержкой 100 сек
var timeUp = function () {
  alert('Время вышло!');
};

setTimeout(timeUp, 100000);

//таймер отсчета с шагом 1 сек
var counter = 1;
var printMessage = function () {
  console.log('Ты смотришь на монитору уже ' + counter + ' секунд');
  counter++;
};
var time = setInterval(printMessage, 1000);

//Подвижный текст
var position = 'вправо';
var offset = 0;
var speed = 10;
var clicks = 0;

// $('#heading').offset({ left: offset, top: offset });

var moveHeading = function () {
  if (position === 'вправо') {
    $('#heading').offset({ left: offset });
    offset++;
    if (offset > 300) {
      offset = 0;
      position = 'вниз';
    }
  } else if (position === 'вниз') {
    $('#heading').offset({ top: offset });
    offset++;
    if (offset > 300) {
      offset = 300;
      position = 'влево';
    }
  } else if (position === 'влево') {
    $('#heading').offset({ left: offset });
    offset--;
    if (offset < 0) {
      offset = 300;
      position = 'вверх';
    }
  } else if (position === 'вверх') {
    $('#heading').offset({ top: offset });
    offset--;
    if (offset < 0) {
      offset = 0;
      position = 'вправо';
    }
  }
};
var intervalId = setInterval(moveHeading, speed);

$('#heading').click(function () {
  clearInterval(intervalId);
  speed /= 2;
  clicks++;

  if (clicks > 10) {
    clearInterval(intervalId);
    $('#heading').text('Докликался!');
  } else {
    intervalId = setInterval(moveHeading, speed);
  }
});
