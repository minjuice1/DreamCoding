// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object.
// object = {key : value};

// ex.name 과 ex['age'] 를 어떠할 때 사용해야 하나 :
// ex['age']를 쓰는 경우 : 정확하게 어떤 key가 필요한지 모를때, 즉 runtime에서 결정 될 때
// ex.name을 쓰는 경우 : 일반적으로는 . 을 사용하는 것이 맞음.


// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later

// 변수를 그냥 아무때나 선언하고 삭제도 할 수 있음;
ellie.hasjob = true;
console.log(ellie.hasjob);

delete ellie.hasjob;
console.log(ellie.hasjob);


// 2. Computed properties
// key should be always string
// Computed properties는 실시간으로 값을 받아오고 싶다면 사용할 수 있음.

console.log(ellie.name);
console.log(ellie['name']);
// 다시 선언할 수 있음
ellie['hasjob'] = true;
console.log(ellie.hasjob);

// 코딩하는 시점에 어떤 key를 출력할지 모른다면
function printvalue(obj, key) {
  console.log(obj [key]);
}
printvalue(ellie, 'name');
printvalue(ellie, 'age');


// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'bob', age: 3};
const person3 = {name: 'bob', age: 4};

// 위와 같이 object를 계속해서 생성해야 한다면, 
const person4 = new Person('ellie', 30);
console.log(person4);  //{name: 'ellie', age: 30}

// const person4 = makePerson('ellie', 30);
// function makePerson(name, age) {
//   return{
//     name,
//     age,
//   }
// }


// 하나의 함수를 해서 값을 뿌려준다면 훨씬 쉽게 구현할 수 있음.
// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}


// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); // false
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) { // 모든 key들을 받아옴.
  console.log(key); // name, age, hasjob
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

for(value of array) {
  console.log(value);
}

// 7. Fun cloning
// Oject.assign(dest, [obj1, obj2, obj3...])

// user2의 name을 'coder'로 바꿨지만, user2 = user 로 선언해서,
// user의 name 값도 'coder'로 변환됨.

const user = {name: 'ellie', age: "20"};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// assign을 이용한 예
// const user4 = {};
// Object.assign(user4, user);
// console.log(user4);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
// 뒤에 나오는 fruit 일수록 앞의 fruit들의 값을 덮어 씌움.
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
