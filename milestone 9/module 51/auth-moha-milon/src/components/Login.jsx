import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
const Login = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const {signInUser, signInWithGoogle} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch(error =>{
            console.log("ERROR: ",error.message);
        })
        
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            navigate('/');
        })
        .catch(error =>{
            console.log('ERROR: ',error);
        })
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="m-4 -mt-4">
            New to this website? please <Link to="/register" className="link link-hover"> Register</Link>
          </p>
          <p>
            <button className="btn btn-ghost" onClick={handleGoogleSignIn}>Google</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
