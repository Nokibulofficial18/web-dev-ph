import { useState } from "react";

const StatefulForm = () => {
    const [name,setName]=useState(null)
    const [email,setEmail] = useState(null);
    const [password, setPassword]= useState(null);
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
    }
    const handleEmailSubmit = e =>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handlePasswordSubmit = e =>{
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    const handleNameSubmit = e =>{
        console.log(e.target.value);
        setName(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleNameSubmit}
                    type="text" name="name"/>
                <br />
                <input
                    onChange={handleEmailSubmit}
                    type="email" name="email" id="" />
                <br />
                <input 
                    onChange={handlePasswordSubmit}
                    type="password" name="password" id="" required/>

                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;