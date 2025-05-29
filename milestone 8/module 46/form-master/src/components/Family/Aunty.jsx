import Cousin from "./Cousin";


const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={"Jorina"}></Cousin>
                <Cousin name={"Morina"}></Cousin>
                <Cousin name={"Monowar"}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;