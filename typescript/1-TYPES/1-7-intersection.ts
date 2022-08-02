{
	/* Intersection Type: & */

	type Student = {
		name: string;
		score: number;
	};

	type Worker = {
		employeeId: number;
		work: () => void;
	};

	function internWork(person: Student & Worker) {
		console.log(person.name, person.employeeId, person.work());
	}

	internWork({
		// property를 하나라도 빼먹는다면 error 발생.
		name: "amy",
		score: 1,
		employeeId: 123,
		work: () => {},
	});
}
