var counter = 1;
var printMessage = function () {
  console.log('Ты смотришь на мониору уже ' + counter + ' секунд');
  counter++;
};

var intervalId = setInterval(printMessage, 1000);
