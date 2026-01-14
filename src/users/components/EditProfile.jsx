
import React, { useEffect } from 'react'
import { Button, Drawer, DrawerHeader, DrawerItems, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import { FaUserEdit } from "react-icons/fa";
import { updateUserAPI, userDetailsAPI } from '../../services/allAPIs';
import { serverURL } from '../../services/serverURL';
function EditProfile() {
   const [token, setToken] = useState("");
   
    useEffect(() => {
    
      setToken(sessionStorage.getItem("token"));
    }, []);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
   //1. create a state to hold user details
      const [userDetails, setUserDetails] = useState({
        username:"",
        password:"",
        role:"",
        bio:"",
        profile:""
      });
const [preview,setPreview]=useState("");
    const handleFileUpload=(e)=>{
      //file format of uploaded image
      console.log(e.target.files[0]);
       //image file to url
      const url = URL.createObjectURL(e.target.files[0]);
      console.log(url);
      setPreview(url)
      setUserDetails({...userDetails,profile:e.target.files[0]})

    }
    const handleUpdate=async()=>{
          console.log(userDetails);
          const {username,password,bio,profile}=userDetails
          try{
              //req header
            const reqheader={
              Authorization:`Bearer ${token}`
            }
            //reqbody
            const reqbody=new FormData()
             for(let key in userDetails){
                reqbody.append(key,userDetails[key])
              }
              //api call
              const result=await updateUserAPI(reqbody,reqheader)
              console.log(result);
              if(result.status==200){
                alert(result.data.message)
                sessionStorage.setItem("userDetails",JSON.stringify(result.data.updateUser));
                setUserDetails(result.data.updateUser);
                setPreview("");
                window.location.reload();
              }
              else{
                alert(result.response.data)
              }
          }
          catch(err){
            console.log("error",err);
            
          }
        }
  const getUserDetails=async()=>{
      try{
              const reqheader={
                Authorization:`Bearer ${token}`
              };
              console.log(reqheader);
              
              const response = await userDetailsAPI(reqheader)
              console.log(response);
              setUserDetails(response.data.user)
              console.log(response.data.user);
              
            }
            catch(err){
              console.log("error"+err);
              
            }
    }
    useEffect(() => {
  if (token) {
    getUserDetails();
  }
}, [token]);
  return (
    <div>
    
   <Button onClick={() => setIsOpen(true)}   className='me-35 !bg-amber-950 border-2'><FaUserEdit /></Button>
   
      <Drawer open={isOpen} onClose={handleClose} className='!bg-amber-950'>
        <DrawerHeader title="Update Profile"  />
        <FaUserEdit className='text-amber-950'/>
        <DrawerItems>
          <form >
            <div className='relative'>
              <label htmlFor="uploadImg">
                <input type="file" id='uploadImg' name='uploadImg' hidden onChange={(e)=>handleFileUpload(e)} />
                <img
                  src={preview ? preview: `${serverURL}/uploads/${userDetails.profile}`}
                  alt=""
                  className="rounded-full shadow-2xl ms-15"
                  width={"160px"}
                />

              <p  id='uploadImg' className='relative -top-10 left-45 !bg-amber-50 p-3 w-10 rounded-xl'><FaUserEdit className='text-amber-950 '/></p >
              </label>

            </div>
            <div className="mb-6 mt-3">
              <Label className="mb-2 block">
                Your Name
              </Label>
              <TextInput 
              onChange={(e)=>setUserDetails({
                ...userDetails,username:e.target.value
              })
            }
            value={userDetails.username}
              placeholder="Name" type="text" style={{backgroundColor:'wheat'}}/>
            </div>
            <div className="mb-6">
              <Label htmlFor="subject" className="mb-2 block">
                Password
              </Label>
              <TextInput
              onChange={(e)=>setUserDetails({
                ...userDetails,password:e.target.value
              })
            }
            value={userDetails.password}
              id="subject" type='password' name="subject" style={{backgroundColor:'wheat'}} />
            </div>
             {/* <div className="mb-6">
              <Label htmlFor="subject" className="mb-2 block">
               Confirm Password
              </Label>
              <TextInput id="subject" type='password' name="subject" style={{backgroundColor:'wheat'}} />
            </div> */}
            <div className="mb-6">
              <Label htmlFor="message" className="mb-2 block">
                Bio 
              </Label>
              <Textarea
              onChange={(e)=>setUserDetails({
                ...userDetails,bio:e.target.value
              })
            }
            value={userDetails.bio}
              id="message" name="message" placeholder="Bio" rows={4} style={{backgroundColor:'wheat'}} />
            </div>
            <div className="mb-6 flex justify-evenly">
              <Button onClick={handleUpdate} type="button" className='!text-amber-950 !bg-amber-50'>
                Update
              </Button>

               <Button
                type="button"
                className='!text-amber-950 !bg-amber-50'
                onClick={() => {
                  setPreview("");
                  getUserDetails();
                }}
              >
                Reset
              </Button>

            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <a href="mailto:info@company.com" className="hover:underline">
                fadedInk.com
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="tel:2124567890" className="hover:underline">
                +91 212-456-7890
              </a>
            </p>
          </form>
        </DrawerItems>
      </Drawer>

      
    </div>
  )
}

export default EditProfile
