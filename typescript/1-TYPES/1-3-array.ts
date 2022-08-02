{
	// Array
	const fruits: string[] = ["apple", "banana"];
	const scores1: number[] = [1, 3, 4];
	const scores2: Array<number> = [1, 3, 4];

	function printArray1(fruits: readonly string[]) {}

	// Array를 이용하면 readonly가 안 먹힘.
	function printArray2(fruits: readonly Array<string>) {}

	// Tuple -> interface, type alias, class
	// 동적으로 data를 사용할 때는 유용할 수 있지만, 가급적이면 안쓰는 것이 좋음.
	// 고정된 사이즈에 서로 다른 타입이 있는 경우.
	// tuple은 data에 접근할 때 index로 접근하면 가독성이 떨어짐.
	// 오브젝트 디스트럭쳐링을 사용하면 조금 더 명확해지긴 함.
	let student: [string, number];
	student = ["name", 123];
	student[0]; // name
	student[1]; // 123
	const [name, age] = student;
}
