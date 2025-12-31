import { serverURL } from "./serverURL";
import commonAPI from "./commonAPI";

// Function to call API endpoints
//1 Register User 
export const registerUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/register`,reqBody,{})
}

//Login user
export const loginUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,{})
}
//google login
export const googleUserLoginAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/googlelogin`,reqBody,{})
}
//add book api
export const addBookAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/addBook`,reqBody,reqHeader)
}
