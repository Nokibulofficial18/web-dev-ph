import { useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div>
            <h2>Ops!! 404 not found</h2>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;