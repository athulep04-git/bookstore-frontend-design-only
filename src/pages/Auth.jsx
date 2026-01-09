import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import "./Auth.css";
import { googleUserLoginAPI, loginUserAPI, registerUserAPI } from "../services/allAPIs";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
function Auth({ register }) {
  console.log(register);

  //create a state to hold user data
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    console.log(userData);
    if (!userData.username || !userData.email || !userData.password) {
      alert("Please fill all the fields");
    } else {
      //call register user api
      try {
        const response = await registerUserAPI(userData);
        console.log(response);
        if (response.status === 200) {
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        } else {
          // alert("Registration Failed! ");
          toast.warn(response.response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleLogin = async () => {
    const { email, password } = userData;
    if (!email || !password) {
      alert("Please fill all the fields");
    } else {
      //call login user api
      try {
        const response = await loginUserAPI({ email, password });
        console.log(response);


        if (response.status === 200) {
          sessionStorage.setItem("token", response.data.token);
          
          

          if (response.data.existingUser.role == "Admin") {
            setTimeout(() => {
              navigate("/admin-home");
            }, 5000);
          } else {
            setTimeout(() => {
              navigate("/");
            }, 5000);
          }
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        } else {
          toast.warn(response.response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleGoogleLogin= async (credentialResponse) =>{
    const decode=jwtDecode(credentialResponse.credential)
    console.log(decode);
    try{
      const response= await googleUserLoginAPI({username:decode.name,email:decode.email,password:'googlepswd',profile:decode.picture})
      console.log(response);
      if (response.status === 200) {
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("userDetails",JSON.stringify(response.data.
existingUser));
          console.log(response.data);
          
          if (response.data.existingUser.role == "Admin") {
            setTimeout(() => {
              navigate("/admin-home");
            }, 5000);
          } else {
            setTimeout(() => {
              navigate("/");
            }, 5000);
          }
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        } else {
          toast.warn(response.response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        }
    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
    <div className="bg">
      <div className="flex flex-row">
        <div className="basis-1/2 p-30 mt-5">
          <form className="flex max-w-md flex-col gap-4">
            <div>
              {register ? (
                <h1 className="text-amber-100 text-3xl mb-5">
                  Register here...
                </h1>
              ) : (
                <h1 className="text-amber-100 text-3xl mb-5">Login here...</h1>
              )}
              {register && (
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" className="mb-2">
                      Your FullName
                    </Label>
                  </div>
                  <TextInput
                    onChange={(e) =>
                      setUserData({ ...userData, username: e.target.value })
                    }
                    className=""
                    id="name"
                    type="text"
                    placeholder="John"
                    required
                  />
                </div>
              )}
              <div className="my-2 block">
                <Label htmlFor="email1">Your email</Label>
              </div>
              <TextInput
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className=""
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1">Your password</Label>
              </div>
              <TextInput
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                id="password1"
                type="password"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            {register ? (
              <Button
                onClick={handleRegister}
                className="text-amber-950 !bg-amber-100"
                type="button"
              >
                SignUp
              </Button>
            ) : (
              <div>
                <Button
                  onClick={handleLogin}
                  className="text-amber-950 !bg-amber-100 w-full mb-5"
                  type="button"
                >
                  SignIn
                </Button>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                    handleGoogleLogin(credentialResponse)
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
                ;
              </div>
            )}
          </form>
        </div>
        <div className="basis-1/2"></div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
}

export default Auth;
