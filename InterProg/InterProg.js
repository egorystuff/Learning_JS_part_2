var counter = 1;
var printMessage = function () {
  console.log('Ты смотришь на монитору уже ' + counter + ' секунд');
  counter++;
};

var intervalId = setInterval(printMessage, 10);

var leftOffset = 0;
var moveHeading = function () {
  $('heading').offset({ left: leftOffset });
  leftOffset++;
  if (leftOffset > 200) {
    leftOffset = 0;
  }
};
setInterval(moveHeading, 30);
