import services, { baseUrl } from "../config/fetchConfig";


export const toggleAuthActionCreator = (data) => ({
	type: "toggleAuth",
	payload: data,
})

export const login = async (user, onSuccess, onError) => {
	try {
		const res = await services.Post('auth/login', user)
		if (res.status == 'success') {
			onSuccess(res)
		}
		else {
			onError(res)
		}
	}
	catch (e) {
		onError(e)
		console.log('error -->', e)
	}
};

export const signUp = async (newUser, onSuccess, onError) => {
	try {
		const res = await services.Post('users/', newUser)
		console.log('result ==>', res)
		if (res.status == 'success') {
			onSuccess(res)
		}
		else {
			onError(res)
		}
	}
	catch (e) {
		onError(e)
		console.log('error -->', e)
	}
};


export const forgetPassword = async (email, onSuccess, onError) => {
	try {
		const res = await services.Post(`users/forgotPw?email=${email}`)
		console.log('result ==>', res)
		if (res.status == 'success') {
			onSuccess(res)
		}
		else {
			onError(res)
		}
	}
	catch (e) {
		onError(e)
		console.log('error -->', e)
	}
}

export const logout = (onSuccess) => {
	onSuccess({})
}