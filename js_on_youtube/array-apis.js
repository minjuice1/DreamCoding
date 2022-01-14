// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // join : Adds all the elements of an array into a string, separated by the specified separator string.
  console.log(fruits.join('|'));
}


// Q2. make an array out of a string
{
  const fruits = '🍑,🍅,🍇,🍓';
  // split : Split a string into substrings using the specified separator and return them as an array.
  // 구분자를 꼭 전달해주어야만 배열안에 생성 됨.
  console.log(fruits.split(','));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1,2,3,4,5];
  // reverse : Reverses the elements in an array in place.
  // reverse는 배열 자체를 변화 시킴.
  console.log(array.reverse());
  console.log(array.sort((a, b) => b - a));
  
}

// Q4. make new array without the first two elements
{
  const array = [1,2,3,4,5];

  // slice : Returns a copy of a section of an array, This is exclusive of the element at the index 'end'.
  // 새로운 배열이 생성 됨.
  // 인덱스2부터 인덱스5 전 까지
  console.log(array.slice(2,5));
  console.log(array);

  // splice : Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
  // splice는 배열 자체에서 삭제 됨.
  // 인덱스2부터 3개의 인덱스
  console.log(array.splice(2,3));
  console.log(array);
}

class Student {
  // properties : name, age, enrolled, score
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // find :  Returns the value of the first element in the array where predicate is true, and undefined
  // find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
  const result = students.find(function(student) {
    // 배열을 순차적으로 돌면서, 첫 번째로 true가 된 요소를 return
    return student.score === 90;
  });

  // arrow func을 사용해서 간결하게 코딩!
  // const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // filter : Returns the elements of an array that meet the condition specified in a callback function.
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // map : Calls a defined callback function on each element of an array, and returns an array that contains the results.
  // 배열안에 들어있는 요소 한가지, 한가지를 다른 것으로 변환해주는 함수.
  const result = students.map((student) => student.score);
  console.log(result);

  // 만약 배열안에 들어있는 요소들의 score에 3을 곱하고 싶다면,
  const result2 = students.map((student) => student.score * 3);
  console.log(result2);
}

// Q8. check if there is a student with the score lower than 50
{
  // some : Determines whether the specified callback function returns true for any element of an array.
  // 배열의 요소 중에서 콜백 함수 return이 true가 되는 값이 있는지 없는지 확인 (true or false)
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // 배열의 요소 중, 모든 요소가 조건에 부합하다면 true
  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  // reduce : Calls the specified callback function for all the elements in an array.
  // The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
  // 배열에 있는 모든 요소들의 값을 누적할때 사용
  const result = students.reduce((prev, curr) => {
    // 우리가 return하는 값들이 순차적으로 prev로 전달 됨.
    return prev + curr.score;
    // 초기값을 0부터 (0부터 시작 됨)
  }, 0);
  console.log(result / students.length);

  // arrow func
  const result2 = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result2);
  
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map(student => student.score).join();
  console.log(result);

  // 만약 점수가 50점 이상인 student만 출력하고 싶다면
  const result2 = students.map(student => student.score).filter(score => score >= 50).join();
  console.log(result2);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map(student => student.score).sort((a, b) => a - b).join();
  console.log(result);
}