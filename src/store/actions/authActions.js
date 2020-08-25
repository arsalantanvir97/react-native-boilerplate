import {
	SIGNUP_SUCCESS,
	SIGNUP_ERROR,
	SIGNOUT_SUCCESS,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
} from "../config/type";
import services, { baseUrl } from "../config/fetchConfig";

export const login = async (user,onSuccess,onError) => {
	try{
		const res = await services.Post('auth/login',user)
		if(res.status == 200){
			onSuccess(res)
		}
		else{
			onError(res)
		}
	}
	catch(e){
		onError(e)
		console.log('error -->',e)
	}
};

export const signUp = async (newUser,onSuccess,onError) => {
	try{
		const res = await services.Post('users/',newUser)
		if(res.status == 200){
			onSuccess(res)
		}
		else{
			onError(res)
		}
	}
	catch(e){
		onError(e)
		console.log('error -->',e)
	}
};
