'use strict';

// class 안에 fields, methods

// class person {
//   name; // 속성 (field)
//   age; // 속성 (field)
//   speak(); // 행동 (method)
// }

// class : -template, -declare once, -no data in
// object : -instance of a class, -created many times, -data in
// JS classes : 
//  -introduced in ES6,
//  -syntactical sugar over prototype-based inferitance

//1. class declarations

class person {
  //constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new person('ellie', 20);
console.log(ellie.name); // ellie
console.log(ellie.age); // 20
ellie.speak(); // ellie: hello!

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;

  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

// 3. Fields (public, private) 최근에 나옴
class Experiment {
  publicField = 2;
  #privateField = 0; // private! class 외부에서는 값을 읽는 것, 변경 불가. only 내부에서만!
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static preperties and methods 최신.
// TS 할 때 많이 쓰임 : object에 (들어오는 데이터) 상관없이, 공통적으로 class에서 쓸 수 있는 거라면
// static과 static method를 사용하는 것이 메모리의 사용을 조금 더 줄일 수 있음.
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); 
console.log(article1.publisher); //undefined. static은 클래스 자체를 받아와야 함.
Article.printPublisher(); // 함수 호출할 때도 클래스 이름을 이용해서 호출.


// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // 이 안에서 우리가 필요한 함수들만 재생성? 할 수 있음. -> override
  draw() {
    // 이렇게 할 경우, 재생성 된 draw 함수만 호출되게 되는데
    console.log('▲')

    // super를 이용해서 부모의 함수를 호출 할 수 있음.
    super.draw();
  }
  getArea() {
    return (this.width * this.height) / 2
  }

  toString() {
    return `Triangle: color: ${this.color}`
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf
// 왼쪽에 있는 object가 오른쪽에 있는 class의 instance인지 확인하는 것.

console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t (shape을 상속했음.)
console.log(triangle instanceof Object); // t (JS의 모든 class들은 object를 상속.)
console.log(triangle.toString()); // object들끼리 공통적으로 존재하는 메서드들 사용할 수 있음.

// 참고 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference