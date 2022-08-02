{
	// type Assertions 💩
	// 장담하는 type이 아니라면 쓰지 말 것.

	function jsStrFunc(): any {
		return 2;
	}
	const result = jsStrFunc();
	console.log((result as string).length); // undefined
	console.log((<string>result).length); // undefined
	// number를 return하는데도 error가 발생하지 않음.

	const wrong: any = 5;
	console.log((wrong as Array<number>).push(1)); // error

	function findNumbers(): number[] | undefined {
		return undefined;
	}
	const numbers = findNumbers();
	numbers!.push(2); // undefined이 아니라 절대적으로 값이 있을때
}
