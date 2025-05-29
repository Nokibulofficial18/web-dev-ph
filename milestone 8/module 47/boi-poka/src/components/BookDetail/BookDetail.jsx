import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utilities/addToDb";


const BookDetail = () => {

    const {bookId} = useParams();

    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);
    const handleMarkAsRead = (bookId) =>{
        addToStoredReadList(bookId)
    }
    const handleAddTOWishList = (id) =>{
        addToStoredWishList(id);
    }
    console.log(book);
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
    `           <div className="hero-content flex-col lg:flex-row gap-10">
                <img
                    src={book.image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <div className="flex flex-col gap-5">
                    <h1 className="text-5xl font-bold">{book.bookName}</h1>
                    <p className="font-medium">By: {book.author}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <p className="font-light">{book.category}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="flex flex-row items-start justify-start">
                        <h1 className="font-bold">Review: </h1>
                        <p>{book.review}</p>
                    </div>
                    <div className="flex flex-row gap-6 ">
                        <h1 className="font-bold ">Tags: </h1>
                        {
                            book.tags.map((tag,idx)=><button key={idx} className="btn btn-xs text-[#23BE0A] font-medium bg-[#23BE0A0D]">{tag}</button>)
                        }
                    </div>
                    <div className="border-t-2 border-dashed"></div>
                    <p>Number of pages: <span className="font-bold ml-10">{book.totalPages}</span></p>
                    <p>Publisher: <span className="font-bold ml-10">{book.publisher}</span></p>
                    <p>Year of Publishing: <span className="font-bold ml-10">{book.yearOfPublishing}</span></p>
                    <p>Rating: <span className="font-bold ml-10">{book.rating}</span></p>
                    <div>
                    <button onClick={()=>handleMarkAsRead(book.bookId)} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
                    <button onClick={()=>handleAddTOWishList(book.bookId)} className="btn btn-accent">Add to WishList</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;