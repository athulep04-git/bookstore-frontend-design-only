import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import { Button, Card } from "flowbite-react";
import { adminDetailsAPI, updateAdminAPI } from '../../services/allAPIs';
import { serverURL } from '../../services/serverURL';
function AdminSettings() {
   const [token, setToken] = useState("");
   
    useEffect(() => {
      
      setToken(sessionStorage.getItem("token"));
    }, []);
   
    //1. create a state to hold admin details
    const [adminDetails, setAdminDetails] = useState({
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
      setAdminDetails({...adminDetails,profile:e.target.files[0]})

    }
    const handleUpdate=async()=>{
      console.log(adminDetails);
      const {username,password,bio,profile}=adminDetails
      try{
          //req header
        const reqheader={
          Authorization:`Bearer ${token}`
        }
        //reqbody
        const reqbody=new FormData()
         for(let key in adminDetails){
            reqbody.append(key,adminDetails[key])
          }
          //api call
          const result=await updateAdminAPI(reqbody,reqheader)
          console.log(result);
          if(result.status==200){
            alert(result.data.message)
          }
          else{
            alert(result.response.data)
          }
      }
      catch(err){
        console.log("error",err);
        
      }
    }

    const getAdminDetails=async()=>{
      try{
              const reqheader={
                Authorization:`Bearer ${token}`
              };
              console.log(reqheader);
              
              const response = await adminDetailsAPI(reqheader)
              console.log(response);
              setAdminDetails(response.data.admin)
              
            }
            catch(err){
              console.log("error"+err);
              
            }
    }
    useEffect(() => {
  if (token) {
    getAdminDetails();
  }
}, [token]);

      

  return (
   <div>
 <div>
<AdminHeader/>
    <section>
          <div className="flex  ...">
  <div className="w-64  ...">
    <AdminSideBar/>
  </div>
  <div className="w-2/3 ...">
   <div>
    <div className="min-h-screen w-full bg-white px-10 py-10">
      <h1 className="text-3xl font-semibold text-center mb-10">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Text */}
        <div className="text-justify text-gray-700 leading-relaxed font-light">
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
            id maxime quia asperiores in cupiditate voluptatum quisquam nemo
            vitae odio, facilis aperiam. Ipsum incidunt labore asperiores!
            Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed neque, facilis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
            id maxime quia asperiores in cupiditate voluptatum quisquam nemo
            vitae odio, facilis aperiam. Ipsum incidunt labore asperiores!
            Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed neque, facilis, consequatur quos eveniet
            inventore ipsam beatae iure fugiat eligendi quae laborum incidunt eum
            quis, est blanditiis exercitationem velit excepturi?
          </p>
        </div>

        {/* Right Side - Profile Card */}
        <div className="bg-blue-100 p-8 rounded-lg shadow-md flex flex-col items-center">
          {/* Image Section */}
          <div className="relative w-28 h-28 mb-6">
            <label htmlFor="uploadImg">
              <input type="file" id='uploadImg' name='uploadImg' hidden onChange={(e)=>handleFileUpload(e)} />
              <img
              src={preview?preview:
              `${serverURL}/uploads/${adminDetails.profile}`}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border border-gray-300"
            />
            <div  id='uploadImg' className="absolute bottom-2 right-2 bg-yellow-400 text-white p-2 rounded-full hover:bg-yellow-500 transition">
              ✏️
            </div>
            </label>
            
            
          </div>

          {/* Input Fields */}
          <div className="w-full flex flex-col gap-4 mb-6">
            <input
              type="text"
              value={adminDetails.username}
              placeholder="username"
              onChange={(e)=>setAdminDetails({
                ...adminDetails,username:e.target.value
              })
            }
             
              className="w-full p-3 rounded border bg-gray-100"
            />

            <input
              type="password"
              value={adminDetails.password}
              onChange={(e)=>setAdminDetails({
                ...adminDetails,password:e.target.value
              })
            }
              placeholder="password"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input

              value={adminDetails.bio}
              type="text"
              onChange={(e)=>setAdminDetails({
                ...adminDetails,bio:e.target.value
              })
            }
              placeholder="bio"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 w-full justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md transition">
              Reset
            </button>
            <button onClick={handleUpdate} 
            type='button'
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md transition">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  </div>
</div>
    </section>
    </div>
    </div>
  )
}

export default AdminSettings
