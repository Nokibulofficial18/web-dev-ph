import bannerImg from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[554px] bg-[#1313130D">
            <div className="hero-content flex-col lg:flex-row-reverse lg:px-24">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mb-5">Books to freshen up your bookshelf</h1>
                    
                    <button className="btn mt-5 bg-[#23BE0A] px-3 py-3">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;