import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    return (
        <div>
            <Header/>
            hello from home.
            {
                navigation.state === "loading" ? <p>Loading.................</p>:<Outlet/>
            }
            <Footer/>
        </div>
    );
};

export default Home;