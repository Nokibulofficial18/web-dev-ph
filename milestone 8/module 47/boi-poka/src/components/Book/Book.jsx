import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookId,image, bookName, author, tags,category} = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
            <div className="bg-[#F3F3F3] p-5 rounded-2xl m-5 py-8">
            <figure className="">
                <img src={image} alt={bookName} className="h-[164px] pt-2 "/>
            </figure>
            </div>
            <div className="card-body">
                <div className="flex justify-start gap-4">
                {
                    tags.map((tag,idx)=><button key={idx} className="btn btn-xs text-[#23BE0A] font-medium bg-[#23BE0A0D]">{tag}</button>)
                }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary border-[#13131326] my-4">NEW</div>
                </h2>
                <p>By: {author}</p>
                <div className="border-t-2 border-dashed"></div>
                <div className="card-actions justify-between mt-6">
                    <div className="badge badge-outline">{category}</div>
                    <div className="">
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;