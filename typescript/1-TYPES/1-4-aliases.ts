{
	/* Type Aliases */
	type Text = string;
	const name1: string = "amy";
	const name2: Text = "amy";
	type Num = number;
	type Student = {
		name: string;
		age: number;
	};
	const student: Student = {
		name: "amy",
		age: 51,
		animal: "dog", // name과 age만 됨
	};

	/* String Literal Types */
	// 문자열도 타입으로 정의할 수 있음. 문자열 뿐 아니라 true 이런 것도.
	// 쓰는 이유 :
	type Name = "name";
	let amyName: Name;
	amyName = "name";

	type JSON = "json";
	const json: JSON = "json";
}
