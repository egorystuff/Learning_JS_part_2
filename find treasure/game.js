//Генератор случайных координат
var getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};

var width = 400;
var height = 400;

var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};
