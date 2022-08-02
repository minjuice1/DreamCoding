{
	/* Enum */

	// JS는 enum이 존재하지 않음.

	// JavaScript
	const MAX_NUM = 6;
	const MONDAY = 0;
	const TUESDAY = 1;
	const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
	const dayOfToday = DAYS_ENUM.MONDAY;
	console.log(dayOfToday); // 0

	// TypeScript
	// 관련된 상수값을 enum으로 묶어서 관리할 수 있음.
	// 하지만, TS에서 enum은 쓰지 않는 것이 좋음.
	// 그 이유는 enum을 쓰게 되면 type이 정확하게 보장되지 않음.
	// 따라서, enum을 쓰지 않고 union 타입을 이용해서 사용할 수 있음.
	type DaysOfWeek =
		| "Monday"
		| "TuesDay"
		| "Wendesday"
		| "ThursDay"
		| "Friday"
		| "Saturday"
		| "Sunday";

	enum Days {
		Monday = 1, // 0
		Tuesday, // 1
		Wednesday,
		Thursday,
		Friday,
		Saturday,
		Sunday,
	}
	console.log(Days.Sunday); // 6
	const day = Days.Saturday;
	console.log(day); // 5

	let daysofWeek: DaysOfWeek = "Sunday";
	daysofWeek = "Saturday";
	console.log(daysofWeek);
}
