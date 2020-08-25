export const baseUrl = "https://matt.divergencecapital.com:5001/api/v1/";


export default class services {
    static Get = async (route) => {
        try{
            const res = await fetch(`${baseUrl}${route}`)
            const response = await res.json()
            return response
        }
        catch(e){
            throw e.message
            console.log(`Error in ${route} -->`,e)
        }
    }
    static Post = async (route,data) => {
        try{
            const res = await fetch(`${baseUrl}${route}`,{
                method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
            })
            const response = await res.json()
            return response
        }
        catch(e){
            throw e.message
            console.log(`Error in ${route} -->`,e)
        }
    }
}