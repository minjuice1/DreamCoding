import React, { memo } from "react";

const HabitAddForm = memo((props) => {
	const inputRef = React.createRef();
	const formRef = React.createRef();

	const onSubmit = (event) => {
		event.preventDefault();
		const name = inputRef.current.value;

		//name이 비어있지 않다면, onAdd라는 함수에 이름을 전달해줘라
		name && props.onAdd(name);

		// input에 데이터를 보낸 후, input창을 초기화
		// this.inputRef.current.value = "";
		formRef.current.reset();
	};

	return (
		<form ref={formRef} className="add-form" onSubmit={onSubmit}>
			<input
				ref={inputRef}
				type="text"
				className="add-input"
				placeholder="Habit"
			/>
			<button className="add-button">Add</button>
		</form>
	);
});

export default HabitAddForm;
