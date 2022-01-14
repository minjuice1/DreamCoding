import React, { useCallback, useEffect, useRef, useState } from "react";

const SimpleHabit = (props) => {
	// 실제의 state값과 count를 업데이트 할 수 있는 setCount를 return 해줌.
	// usestate라는 함수, API를 통해서 state를 설정하고, (count)
	// state를 업데이트할 수 있는 함수를 받아 올 수 있다. (setCount)
	const [count, setCount] = useState(0);

	// 클래스의 멤버변수들 같은 경우에는 한번 만들어지면, 딱 그 클래스가 만들어질 때 딱 한번만 만들어짐(한번만 할당)
	// 그리고, state나 props가 변경이 되면 render 함수만 계속해서 반복 호출이 됨.

	// 함수형은 컴포넌트가 변경이 되면, 코드블럭 전체가 반복해서 호출 됨
	// function 컴포넌트는 props나 state가 변경되면, 지역변수들까지 전체가 반복 되어짐
	// 그래서 onClick에 전달한 콜백함수는 첫 번째 불려졌을 떄, 새로운 함수가 만들어지고
	// 다음에 state가 변경이 되어서 다시 함수가 호출되면, 또 다른 값들을 업데이트 해준다

	// 리액트 훅인 useState는 리액트가 알아서 자동으로 기억하고 있음.
	// useState를 아무리 계속 호출해도, 리액트에서 따로 저장되어 있어서 동일한 값을 메모리에 저장해놓기 때문에
	// 동일한 값들을 불러온다.

	// ref를 사용함으로써 관심있는, 알고 싶은 컴포넌트에 연결할 수 있다.
	// CreateRef는 계속 호출이 되면서, 새로운 레퍼런스를 만들어서 새로운 것들을 할당 한다.
	// 리액트 훅인 useRef를 사용해서 한번만 만들고 메모리에 저장해서 재사용.
	const spanRef = useRef();

	// useCallback를 사용하면 자동으로 리액트가 캐시를 해서, 계속 반복해서 호출되어도 동일한 콜백함수를 호출한다.
	const handleIncrement = useCallback(() => {
		setCount(count + 1);
	});

	// count가 변경이 될 때마다 함수가 호출 됨
	// useEffect(() => {
	// 	console.log(`mounted & updated: ${count}`);
	// }, [count]);

	//아무것도 넣지 않으면, 기존의 props나 state가 변경될 때 마다 호출 됨
	// useEffect(() => {
	// 	console.log(`mounted & updated: ${count}`);
	// });

	// 빈 배열만 전달하면, 처음에만 호출 됨
	useEffect(() => {
		console.log(`mounted & updated: ${count}`);
	}, []);

	return (
		<li className="habit">
			<span ref={spanRef} className="habit-name">
				Reading
			</span>
			<span className="habit-count">{count}</span>
			<button className="habit-button habit-increase" onClick={handleIncrement}>
				<i className="fas fa-plus-square"></i>
			</button>
		</li>
	);
};

export default SimpleHabit;
