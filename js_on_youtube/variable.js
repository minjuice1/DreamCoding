// 비상식적인? 코드들을 방지하기 위해, use strict를 사용
// [1] Use strict (added in ES5), use this for valina JS
'use strict';
// console.log("Hello world!");

// --------------------------------------------------------------
// [2] Variable - 변경될 수 있는 값 / rw(read/write)

// 1. let (added in ES6) mutable data type.

let globalName = 'global name';

{
  let name = 'mj';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

// 2. Var (don't ever use this!)
// var hoisting => 어디에 선언했는지 상관없이 선언을 제일 위로 끌어올려주는 것
// var hoisting => move declaration from bottom to top
// var를 사용하면 안되는 이유 : 1. var를 선언하기도 전에, 값을 넣고 콘솔에 출력하는 것
// var를 사용하면 안되는 이유 : 2. has no block scope

console.log(age);
age = 4;
console.log(age);
var age;

// 3. Constants - (read only)
// use const whenever possible.
// only use let if variable needs to change.

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons:
// 1) security, 2) thread safety, 3) reduce human mistakes

// 4. Variable types
// primitive => single item: number, string, boolean, null, undefined, symbol
// object(여러개의 single을 묶어서 한 박스로 관리해주는 것) => box container
// function,
//first-class function(다른 data type처럼 변수에 할당이 가능, 함수에 파라미터(인자)로 전달이 되고, 리턴 타입으로도 function을 return할 수 있는 것이 가능)

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// 1) number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 2) bigInt (fairly new, don't use it yet)
const bigInt = 1231231249827359823749857298379427349n; //
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// 3) string
// `${}` // template literals (string)

// 4) boolean
// false : 0, null, undefined, NaN, ''
// true: any other value

// 5) symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

// object, real-life object, data structure
// const로 생성된 ellie는 변경이 불가하지만, 할당받은 name, age 같은 경우는 변경 가능
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); // string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // string
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`); // number


