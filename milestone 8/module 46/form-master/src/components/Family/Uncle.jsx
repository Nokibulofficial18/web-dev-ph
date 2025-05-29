import Cousin from "./Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Rahim'}></Cousin>
                <Cousin name={'Kahim'}></Cousin>
                <Cousin name={'Sumona'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;