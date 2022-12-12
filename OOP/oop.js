var dog = {
  name: 'ШПАК',
  legs: 4,
  isAvesome: true,
};

dog.age = 6;

dog.bark = function () {
  console.log('ГАВ-ГАВ я ПЕС по имени ' + this.name + ' !');
};

console.log(dog.bark());
