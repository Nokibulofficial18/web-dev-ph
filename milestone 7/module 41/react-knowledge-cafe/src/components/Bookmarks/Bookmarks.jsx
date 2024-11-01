import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 ml-8 mt-5 p-4">
            <div className="border-2 border-purple-500 rounded-lg bg-purple-200
            mb-10">
                <h3 className="text-4xl text-purple-600 font-lg">Spent time on read : {readingTime} min</h3>
            </div>
            <div className=" bg-[#1111110D ] rounded-lg pb-10">
            <h2 className="text-4xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark = {bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

export default Bookmarks;