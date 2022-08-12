{
	// string
	const str: string = "hi";

	// boolean
	const isCat: boolean = false;

	// undefined
	const age: string = undefined;
	let notYet: undefined; // 💩
	// notYet = 1;
	function find(): number | undefined {
		return undefined;
	}

	// null
	const name: string = null;
	let person: null; // 💩
	let person2: string | null;

	// unknown 💩
	let notSure: unknown = 0;
	notSure = "hi";
	notSure = true;

	// any 💩
	let anything: any = 0;
	anything = "hi";

	// void
	// 함수에서 아무것도 return하지 않으면 자동으로 void.
	// 생략 가능
	// 따로 변수에 담아서 사용하지 않음.
	function print(): void {
		console.log("hi");
		return;
	}
	let unusable: void = undefined; // 💩

	// never
	// 아무것도 return 하지 않는 것.
	// while문 또는 error를 던지는 것만 가능
	function throwError(message: string): never {
		// message -> server (log)
		throw new Error(message);
		while (true) {}
	}

	// object
	// 어떤 것이든 다 담을 수 있기에 너무 광범위 함.
	let obj: object; // 💩
	function acceptSomeObject(obj: object) {}
	acceptSomeObject({ name: "amy" });
	acceptSomeObject({ animal: "dog" });
}
