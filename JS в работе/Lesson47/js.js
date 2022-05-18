'use strict';

class Rectangle {
  constructor(height, width) {
    this.height = height; // this.heigth - свойство, height после = это аргумент constructor
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());

class ColoredRectangleWithText extends Rectangle { // class ColoredRectangleWithText наследует Rectangle
  constructor(height, width, text, bgColor) {
    super(height, width); // вызывает тоже самое что было у родителя. в скобках можно выбрать конкретные свойства
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.showMyProps();
console.log(div.calcArea());
