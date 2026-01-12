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

//all books
export const getAllBooksAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getbooks`,{},reqHeader)
}
//latest  4 books view
export const getlatestbooks = async()=>{
    return await commonAPI('GET',`${serverURL}/api/latestbooks`,{},{})
}
//view a selected book
export const viewbookAPI = async(id,reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/viewbook/${id}`,{},reqHeader)
}

//user list in admin login
export const userlistAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getusers`,{},reqHeader)
}

//book list in admin login
export const booklistAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getbooksad`,{},reqHeader)
}

//update admin details
export const updateAdminAPI = async(reqbody,reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/api/update-admin`,reqbody,reqHeader)
}

export const adminDetailsAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getadmindetails`,{},reqHeader)
}