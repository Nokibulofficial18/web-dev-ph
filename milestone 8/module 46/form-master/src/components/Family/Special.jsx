import { useContext } from "react";
import { AssetContext } from "./Grandpa";


const Special = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p>has: {gift}</p>
        </div>
    );
};

export default Special;