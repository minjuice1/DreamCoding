// object와의 차이점
// 토끼는 동물, 귀 두개, 먹는다, 뛴다, 동물
// 당근은 채소, 주황색, 비타민C
// 다른 타입이 있는 프로그래밍 언어는 토끼는 토끼 끼리, 당근은 당근 끼리 등 같은 타입끼리 묶어놔야 하는데,
// JS는 dynamically typed language 라서, 한 바구니 안에서도 다양한 타입들을 한번에 넣을 수 있음. 그렇지만 비추

// 자료구조와 알고리즘 추가로 공부해야 함!

'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎','🍌'];
console.log(fruits); // ['🍎','🍌']
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[fruits.length - 1]); // 🍌
console.log(fruits[2]); // undefined

console.clear();
// 3. Looping over an array
// print all fruits

// a. for문
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach(function (fruit, index, array) {
  console.log("hi");
  console.log(fruit);
  console.log(index);
  console.log(array);
})

fruits.forEach((fruit, index) => {
  console.log(fruits, index);
});

// 한줄의 arrow func을 사용하는 경우
fruits.forEach((fruit) => console.log(fruits));

console.clear();
// 4. Addtion, deletion, copy
// push: add an item to the end
// push: Appends new elements to the end of an array, and returns the new length of the array.
fruits.push('🍓','🍑');
console.log(fruits);

// pop: remove an item from the end
// pop: Removes the last element from an array and returns it.
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
// unshift: Inserts new elements at the start of an array, and returns the new length of the array.
fruits.unshift('🍒', '🥝');
console.log(fruits);

// shift: remove an item from the beginning
// shift: Removes the first element from an array and returns it.
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 뒤에서부터 빼면, 기존의 데이터를 건드리지 않아도 돼서 메모리를 별로 쓰지 않지만
// 앞부분을 건드리게 되면, 전체의 데이터를 건드려야 하므로 작동시키는데 훨씬 오래 걸린다.
// 그래서 배열의 길이가 길면 길수록 pop과 push를 사용하는 것이 빠름!

// splice: remove an item by index position
// splice: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
fruits.push('🍉','🍊','🍇');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(2); // 인덱스 2부터 그 이후의 모든 데이터를 다 지움.
console.log(fruits);
fruits.splice(1, 1, '🍍','🥥','🌽','🥑'); // 인덱스 1부터 1개의 요소를 지우고, 그 자리에 파인애플과 코코넛을 넣어라.
console.log(fruits);

// combine two arrays
// concat : Combines two or more arrays.
const fruits2 = ['🍏','🍅'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();
// 5. Searching
// indexOf: find the index
// indexOf: Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(fruits); ['🍎', '🍍', '🥥', '🌽', '🥑']
console.log(fruits.indexOf('🌽')); // 3
console.log(fruits.indexOf('🍍')); // 1
console.log(fruits.indexOf('🍇')); // -1 (배열안에 해당 값이 없을 경우)

// includes
// includes: Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(fruits.includes('🍍')); // true
console.log(fruits.includes('🍇')); // false

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits); // ['🍎', '🍍', '🥥', '🌽', '🥑', '🍎']
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.lastIndexOf('🍎')); // 5