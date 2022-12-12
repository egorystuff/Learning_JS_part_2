var dog = {
  name: 'ШПАК',
  sound: 'ГАВ ГАВ',
  speak: speak,
  legs: 4,
  isAvesome: true,
};

//Точечная нотация. Добавляет новый ключ к объекту
dog.age = 6;

//метод 1. Добавляется к объекту dog через точ нотацию
dog.bark = function () {
  console.log('ГАВ-ГАВ я ПЕС по имени ' + this.name + ' !');
};

//метод 2. присваиваем объекту cat
var speak = function () {
  console.log(this.sound + '! Меня зовут ' + this.name + ' !');
};

var cat = {
  sound: 'МЯУ МЯУ',
  name: 'КОШАКА',
  speak: speak,
};

var pig = {
  sound: 'Хрю',
  name: 'Чарли',
  speak: speak,
};

var horse = {
  sound: 'И-го-го',
  name: 'Мэри',
  speak: speak,
};

console.log(dog.speak());
