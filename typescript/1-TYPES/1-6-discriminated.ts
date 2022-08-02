{
	// function: login -> success, fail
	type SuccessState = {
		// result로 공통적인 property를 가져서, 구분하기 쉽게 만든다.
		result: "success";
		response: {
			body: string;
		};
	};
	type FailState = {
		result: "fail";
		reason: string;
	};
	type LoginState = SuccessState | FailState;
	function login(): LoginState {
		return {
			result: "success",
			response: {
				body: "logged in!",
			},
		};
	}

	// printLoginState(state: LoginState)
	// success -> 🤩 body
	// fail -> 😢 reason

	function printLoginState(state: LoginState) {
		if (state.result === "success") {
			console.log(`🤩 ${state.response.body}`);
		} else {
			console.log(`😢 ${state.reason}`);
		}
	}
}
