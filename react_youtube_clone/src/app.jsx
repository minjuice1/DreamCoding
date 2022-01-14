
import './app.css';
function App() {
  return <h1>Hello :)</h1>;
import React, { Component } from "react";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import SimpleHabit from "./components/simpleHabit";

class App extends Component {
	state = {
		habits: [
			{ id: 1, name: "Reading", count: 0 },
			{ id: 2, name: "Running", count: 0 },
			{ id: 3, name: "Coding", count: 0 },
		],
	};

	handleIncrement = (habit) => {
		// console.log(`handleIncrement ${habit.name}`);
		// // state 배열 안에 들어있는 object들을 직접 수정하는 것은 좋지 않아서, 새로운 배열 생성
		// const habits = [...this.state.habits];
		// const index = habits.indexOf(habit);

		// // state를 직접적으로 수정하는 것이라 좋지 않음!!
		// habits[index].count++;
		// this.setState({ habits });
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				return { ...habit, count: habit.count + 1 };
			}
			return item;
		});
		this.setState({ habits });
	};

	handleDecrement = (habit) => {
		// console.log(`handleDecrement ${habit.name}`);
		// const habits = [...this.state.habits];
		// const index = habits.indexOf(habit);
		// const count = habits[index].count - 1;
		// habits[index].count = count < 0 ? 0 : count;
		// this.setState({ habits });
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				const count = habit.count - 1;
				return { ...habit, count: count < 0 ? 0 : count };
			}
			return item;
		});
		this.setState({ habits });
	};

	handleDelete = (habit) => {
		console.log(`handleDelete ${habit.name}`);

		// 기존 array인 habits를 item으로 전달받아서, habits(item)의 id가
		// 우리가 삭제할 habit의 id 와 같지 않은 데이터들만 모아서 새로운 배열을 생성!!
		const habits = this.state.habits.filter((item) => item.id !== habit.id);
		this.setState({ habits });
	};

	handleAdd = (name) => {
		// 새로운 배열에 기존의 habits를 모두 넣어주고, 플러스로 { id: Date.now(), name, count: 0 } 부분 생성
		// id값이 있어야 하므로, 거의 동일한 값이 발생할 일 없는 초단위 까지의 Date를 id값으로 둔다.
		// 그리고 입력받아질 name , count의 초기값은 0
		// 새로운 배열을 setState를 이용하여 작동
		const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
		this.setState({ habits });
	};

	handleReset = (habit) => {
		//새로운 배열인 habits를 만들고, 기존의 habits배열을 돌면서 리셋해준다.
		// 기존 배열의 모든 habit count를 0으로 만들고 리턴시킨다.
		// const habits = this.state.habits.map((habit) => {
		// 	habit.count = 0;
		// 	return habit;
		// });
		// this.setState({ habits });
		const habits = this.state.habits.map((habit) => {
			if (habit.count != 0) {
				return { ...habit, count: 0 };
			}
			return habit;
		});
		this.setState({ habits });
	};

	render() {
		return (
			// <>
			// 	<Navbar
			// 		totalCount={this.state.habits.filter((item) => item.count > 0).length}
			// 	/>
			// 	<Habits
			// 		habits={this.state.habits}
			// 		onIncrement={this.handleIncrement}
			// 		onDecrement={this.handleDecrement}
			// 		onDelete={this.handleDelete}
			// 		onAdd={this.handleAdd}
			// 		onReset={this.handleReset}
			// 	/>
			// </>
			<>
				<SimpleHabit />
			</>
		);
	}
}

export default App;
