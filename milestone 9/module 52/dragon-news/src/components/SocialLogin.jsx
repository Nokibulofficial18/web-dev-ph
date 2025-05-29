import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className="flex flex-col gap-2 *:w-full">
                <button className="btn"> <FaGoogle /> Login With Google</button>
                <button className="btn"><FaGithub></FaGithub> Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;