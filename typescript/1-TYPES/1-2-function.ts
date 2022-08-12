{
	// JavaScript 💩
	// function jsAdd(num1, num2) {
	// 	return num1 + num2;
	// }

	// // TypeScript ✨
	// function add(num1: number, num2: number): number {
	// 	return num1 + num2;
	// }

	// // JavaScript 💩
	// function jsFetchNum(id) {
	// 	// code ...
	// 	// code ...
	// 	return new Promise((resolve, reject) => {
	// 		resolve(100);
	// 	});
	// }

	// // TypeScript ✨
	// function FetchNum(id: string): Promise<number> {
	// 	// code ...
	// 	// code ...
	// 	return new Promise((resolve, reject) => {
	// 		resolve(100);
	// 	});
	// }

	// JavaScript => TypeScript
	// Optional parameter
	function printName(firstName: string, lastName?: string) {
		console.log(firstName);
		console.log(lastName);
	}
	printName("amy", "park");
	// printName("amy", 0); // error
	printName("amy"); // 두번째 인자는 전달하지 않아도 되도록 Optional parameter 이용
	printName("amy", undefined); // Optional parameter

	// Default parameter
	function printMessage(message: string = "default message") {
		console.log(message);
	}
	printMessage();

	// Rest parameter
	function addNumbers(...numbers: number[]): number {
		return numbers.reduce((a, b) => a + b);
	}

	console.log(addNumbers(1, 2));
	console.log(addNumbers(1, 2, 3, 4));
}
