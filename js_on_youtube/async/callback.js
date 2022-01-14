"use strict";

// JavaScript is synchronous.
// Execute the code block by order after hoisting.
// hoisting: var, function declaration
// 호이스팅이 된 이후부터, 코드가 나타나는 순서대로 자동적으로 실행 된다.

// Synchronous callback
function printImmediately(print) {
	print();
}

// Asychronous callback
function printWithDelay(print, timeout) {
	setTimeout(print, timeout);
}

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

printImmediately(() => console.log("hello"));

printWithDelay(() => console.log("async callback"), 2000);

console.clear();

// Callback Hell example
class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if (
				(id === "amy" && password === "dream") ||
				(id === "coder" && password === "academy")
			) {
				onSuccess(id);
			} else {
				onError(new Error("not found"));
			}
		}, 2000);
	}

	getRoles(user, onSuccess, onError) {
		setTimeout(() => {
			if (user === "amy") {
				onSuccess({ name: "amy", role: "admin" });
			} else {
				onError(new Error("no access"));
			}
		}, 1000);
	}
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
	id,
	password,
	(user) => {
		// userStorage.loginUser 에서 userStorage.getRoles를 부름.
		userStorage.getRoles(
			user,
			// 또 userWtihRole을 부름 => 콜백 지옥
			(userWithRole) => {
				alert(
					`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`,
				);
			},
			(error) => {
				console.log(error);
			},
		);
	},
	(error) => {
		console.log(error);
	},
);

// 콜백 체인의 문제점
// 1. 가독성이 떨어짐 (비즈니스 로직)
// 2. 에러발생, 디버깅할 때 어려움
// 3. 유지보수 어려움
