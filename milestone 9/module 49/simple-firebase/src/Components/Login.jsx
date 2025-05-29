import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,googleProvider)
        .then((result)=>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error =>{
            console.log(error);
            setUser(null);
        })
    }
    
    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{
            console.log("sign out done");
            setUser(null);
        })
        .catch(error => console.log(error));
    }
    const handleGIthubSignIn = () =>{
        signInWithPopup(auth,githubProvider)
        .then((result)=>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error =>{
            console.log(error);
            setUser(null);
        })
    }
    return (
        <div>
            
            
            {
                user ? <button onClick={handleSignOut}>Sign Out</button> : 
                <>
                <button onClick={handleGoogleSignIn}>Login with Google</button>
                <button onClick={handleGIthubSignIn}>Login With Github</button>
                </>
            }
            {
                user && <div>
                    <h4>{user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL}></img>
                </div>
            }
        </div>
    );
};

export default Login;