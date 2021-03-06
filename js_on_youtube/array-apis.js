// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // join : Adds all the elements of an array into a string, separated by the specified separator string.
  console.log(fruits.join('|'));
}


// Q2. make an array out of a string
{
  const fruits = '๐,๐,๐,๐';
  // split : Split a string into substrings using the specified separator and return them as an array.
  // ๊ตฌ๋ถ์๋ฅผ ๊ผญ ์ ๋ฌํด์ฃผ์ด์ผ๋ง ๋ฐฐ์ด์์ ์์ฑ ๋จ.
  console.log(fruits.split(','));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1,2,3,4,5];
  // reverse : Reverses the elements in an array in place.
  // reverse๋ ๋ฐฐ์ด ์์ฒด๋ฅผ ๋ณํ ์ํด.
  console.log(array.reverse());
  console.log(array.sort((a, b) => b - a));
  
}

// Q4. make new array without the first two elements
{
  const array = [1,2,3,4,5];

  // slice : Returns a copy of a section of an array, This is exclusive of the element at the index 'end'.
  // ์๋ก์ด ๋ฐฐ์ด์ด ์์ฑ ๋จ.
  // ์ธ๋ฑ์ค2๋ถํฐ ์ธ๋ฑ์ค5 ์  ๊น์ง
  console.log(array.slice(2,5));
  console.log(array);

  // splice : Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
  // splice๋ ๋ฐฐ์ด ์์ฒด์์ ์ญ์  ๋จ.
  // ์ธ๋ฑ์ค2๋ถํฐ 3๊ฐ์ ์ธ๋ฑ์ค
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
    // ๋ฐฐ์ด์ ์์ฐจ์ ์ผ๋ก ๋๋ฉด์, ์ฒซ ๋ฒ์งธ๋ก true๊ฐ ๋ ์์๋ฅผ return
    return student.score === 90;
  });

  // arrow func์ ์ฌ์ฉํด์ ๊ฐ๊ฒฐํ๊ฒ ์ฝ๋ฉ!
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
  // ๋ฐฐ์ด์์ ๋ค์ด์๋ ์์ ํ๊ฐ์ง, ํ๊ฐ์ง๋ฅผ ๋ค๋ฅธ ๊ฒ์ผ๋ก ๋ณํํด์ฃผ๋ ํจ์.
  const result = students.map((student) => student.score);
  console.log(result);

  // ๋ง์ฝ ๋ฐฐ์ด์์ ๋ค์ด์๋ ์์๋ค์ score์ 3์ ๊ณฑํ๊ณ  ์ถ๋ค๋ฉด,
  const result2 = students.map((student) => student.score * 3);
  console.log(result2);
}

// Q8. check if there is a student with the score lower than 50
{
  // some : Determines whether the specified callback function returns true for any element of an array.
  // ๋ฐฐ์ด์ ์์ ์ค์์ ์ฝ๋ฐฑ ํจ์ return์ด true๊ฐ ๋๋ ๊ฐ์ด ์๋์ง ์๋์ง ํ์ธ (true or false)
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // ๋ฐฐ์ด์ ์์ ์ค, ๋ชจ๋  ์์๊ฐ ์กฐ๊ฑด์ ๋ถํฉํ๋ค๋ฉด true
  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  // reduce : Calls the specified callback function for all the elements in an array.
  // The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
  // ๋ฐฐ์ด์ ์๋ ๋ชจ๋  ์์๋ค์ ๊ฐ์ ๋์ ํ ๋ ์ฌ์ฉ
  const result = students.reduce((prev, curr) => {
    // ์ฐ๋ฆฌ๊ฐ returnํ๋ ๊ฐ๋ค์ด ์์ฐจ์ ์ผ๋ก prev๋ก ์ ๋ฌ ๋จ.
    return prev + curr.score;
    // ์ด๊ธฐ๊ฐ์ 0๋ถํฐ (0๋ถํฐ ์์ ๋จ)
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

  // ๋ง์ฝ ์ ์๊ฐ 50์  ์ด์์ธ student๋ง ์ถ๋ ฅํ๊ณ  ์ถ๋ค๋ฉด
  const result2 = students.map(student => student.score).filter(score => score >= 50).join();
  console.log(result2);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map(student => student.score).sort((a, b) => a - b).join();
  console.log(result);
}