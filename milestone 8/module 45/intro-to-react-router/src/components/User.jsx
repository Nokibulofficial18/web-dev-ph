import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone} = user;

    const navigate = useNavigate();

    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
        margin:'10px',
    }
    
    const handleClick= () =>{
        navigate(`/user/${id}`)
    };

    return (
        <div style={userStyle}>
            <span>{id} </span>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <button onClick={handleClick}>Click to see details.</button>
        </div>
    );
};

export default User;