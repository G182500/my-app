interface LoginResponse {
	message: string,
	data?: {
		token: string,
		user: any
	}
}

const signInRequest = async ({ username, password }: { username: string, password: string }) => {
	const response = await fetch("/api/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username, password }),
	});

	const { message, data }: LoginResponse = await response.json();
	return { message, data };

}

export default signInRequest