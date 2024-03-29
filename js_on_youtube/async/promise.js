"use strict";

// Promise is a JavaScript object for asynchronos operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promis is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
	// doing some heavy work (network, read files)
	console.log("doing something...");
	setTimeout(() => {
		// resolve("ellie");
		reject(new Error("no network"));
	}, 2000);
});

// 2. Consumers: then, catch, finally
promise
	.then((value) => {
		console.log(value);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log("finally");
	});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 1000);
});

fetchNumber
	.then((num) => num * 2)
	.then((num) => num * 3)
	.then((num) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(num - 1), 1000);
		});
	})
	.then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve("🐔"), 1000);
	});
const getEgg = (hen) =>
	new Promise((resolve, reject) => {
		setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
	});
const cook = (egg) =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${egg} => 🍳`), 1000);
	});

getHen() //
	.then(getEgg)
	// 만약 getEgg에서 error가 발생한다면, 알이랑 닭대신 빵 => 팬
	// getEgg 부분의 예외를 처리하고 싶을 때.
	.catch((error) => {
		return "🍖";
	})
	.then(cook)
	.then(console.log)
	.catch(console.log);
// .then((hen) => getEgg(hen))
// .then((egg) => cook(egg))
// .then((meal) => console.log(meal));
