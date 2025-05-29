import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    const name = event.target.name.value;
    const photo = event.target.photo-url.value;
    console.log(email);
    console.log(password);
    // reset error and status

    setErrorMessage("");
    setSuccess(false);

    

    if (password.length < 6) {
      setErrorMessage("Password should contain at least 6 characters");
      return;
    }
    if(!terms){
      setErrorMessage("You have to accept our terms and condition");
      return;
    }
    //create user with email and password
    createUserWithEmailAndPassword(auth, email, password,name, photo, terms)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        //send verification
        sendEmailVerification(auth.currentUser)
        .then(()=>{
          console.log("verification done...");
        })
      })
      //update profile name and photo url
      const profile = {
        displayName: name,
        photoUrl: photo, 
      }
      updateProfile(auth.currentUser, profile)
      .then(()=>{
        console.log("User profile updated..");
      })
      .catch(error =>{
        console.log("User profile update error", error);
      })

      .catch((error) => {
        console.log("ERROR", error);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };

  return (
    <div className="space-y-8 max-w-lg mx-auto">
      <h2 className="text-4xl my-8">Register</h2>
      <form className="space-y-10" onSubmit={handleRegister}>
        <label className="input input-bordered flex items-center gap-2 my-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            name="name"
            placeholder="Name"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            name="photo-url"
            placeholder="Photo URL"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            name="email"
            placeholder="Email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type={showPassword ? "text" : "password"}
            className="grow"
            name="password"
            placeholder="Password"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-xs"
          >
            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </button>
        </label>
        <div className="form-control">
          <label className="label cursor-pointer flex justify-start gap-5 items-center">
            <input type="checkbox" name="terms" className="checkbox" />
            <span className="label-text">Accept Terms and Conditions.</span>
            
          </label>
        </div>
        <button className="btn btn-accent btn-wide my-8">Login</button>
      </form>
      {errorMessage && <p className=" text-red-600">{errorMessage}</p>}
      {success && (
        <p className="text-green-600">Successfully created your account...</p>
      )}
      <p>Already have an account? Please<Link to='/login'> Login</Link></p>
    </div>
  );
};

export default Register;
