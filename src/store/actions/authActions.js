import services, { baseUrl } from "../config/fetchConfig";

import axios from 'axios'
import querystring from 'querystring'
import {setStorageItem}from '../../utils/index'
export const toggleAuthActionCreator = (data) => ({
	type: "toggleAuth",
	payload: data,
})

export const login = async (loggedinuser, onSuccess, onError) => {
	console.log('loggedinuser',loggedinuser)
	// try {
	// 	const res = await services.Post('auth/login', user)
	// 	if (res.status == 'success') {
	// 		onSuccess(res)
	// 	}
	// 	else {
	// 		onError(res)
	// 	}
	// }
	// catch (e) {
	// 	onError(e)
	// 	console.log('error -->', e)
	// }

	try {

		await axios.post('https://playercloud.in/app/login', querystring.stringify({
			email: loggedinuser.email,
			password: loggedinuser.password
		}))
			.then((response) => {
				console.log("hhhhhhhh", response);
				if(response.status===200){
				setStorageItem('Authorization', response.data);
				axios.defaults.headers.common.Authorization = `bearer ${response.data}`;
			}
				axios.get('https://playercloud.in/api/full-details')
					.then((response) => {
						console.log('responsee',response)
						// this.props.change('SET_USER', response.data);
						if(response.status===200){
						onSuccess(response)
					}else{
						onError(response)
					}
					
					}).catch(err => {
						console.log(err)
						
						
					});
				// this.setState({ loading: false, loginSuccess: true, error: '' });
			})
			.catch((error) => {
				console.log("error 1", error.message);
				// this.setState({
				// 	loading: false,
				// 	error: (error.response && error.response.status && error.response.status !== 400) ? 'Connect to internet' : 'Invalid email or password'
				// });
				// setTimeout(() => {
				// 	this.setState({ error: '' });
				// }, 5000);
			});
	} catch (e) {
		console.log("error si ", e, e.message);
	}
}



export const signUp = async (newUser, onSuccess, onError) => {
	console.log('newUser',newUser)
	try {
	await axios.post('https://playercloud.in/app/register', querystring.stringify({
            email: newUser.email,
            password: newUser.password,
            userType: newUser.type
        }))
		// console.log('result ==>', res)
		.then(async(response) => {
			console.log('response',response);
			if(response.status===200){
			setStorageItem('Authorization', response.data);
			// this.props.change('newUser', true);
			axios.defaults.headers.common.Authorization = `bearer ${response.data}`;}
			await axios.get('https://playercloud.in/api/full-details')
				.then((response) => {
					console.log('responseeee',response)
					if (response.status === 200) {
						onSuccess(response)
					}
					//  this.props.change('SET_USER', response.data);
					//  console.log('responssse',response,response.data); })
				 }) .catch(err => { onError(err)});
			// this.setState({ loading: false, loginSuccess: true, error: '' });
		})
		// if (res.status === 200) {
		// 	onSuccess(res)
		// }
		// else {
		// 	onError(res)
		// }
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