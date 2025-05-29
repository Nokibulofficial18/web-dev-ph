import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack =     () =>{
        navigate(-1)
    }
    return (
        <div>
            <h1>users details</h1>
            <h2>{user.name}</h2>
            <p>{user.phone}</p>
            <p>{user.email}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default UserDetails;