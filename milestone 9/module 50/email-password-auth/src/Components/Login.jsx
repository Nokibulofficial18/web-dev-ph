import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../firebase.init";
import { NavLink } from "react-router-dom";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [success,setSuccess] = useState(false);
    const [loginError, setLoginError] = useState('');
    const emailRef = useRef()
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value; 
        setSuccess(false);
        setLoginError('');
        //login user
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            console.log(result.user);
            if(!result.user.emailVerified){
                setLoginError("Please verify your mail!!!!!");
                
            }
            else{
            setSuccess(true);
        }

        })
        .catch(error =>{
            console.log("ERROR", error.message);
            setLoginError(error.message)
        })
    }
    const handleForgetPassword = () =>{
        const email = emailRef.current.value;
        if(!email){
            console.log('Please provide a valid email address');
        }
        else{
            sendPasswordResetEmail(auth,email)
            .then(()=>{
                alert('Password Reset email sent, please check your email');
            })
        }
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                ref={emailRef}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <button
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-xs absolute right-2 top-12"
          >
            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </button>
              <label onClick={handleForgetPassword} className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {
            success && <p className="text-2xl text-green-800">Login In Successful</p>
          }
          {
            loginError && <p className="text-2xl text-red-800">{loginError}</p>
          }
          <p>New to this website please <NavLink to='/register'>Sign UP</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
