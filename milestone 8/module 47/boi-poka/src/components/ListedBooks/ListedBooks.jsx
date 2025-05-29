import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utilities/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {

    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([]);
    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id=>parseInt(id));


        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);
    },[])

    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I Read: {readList.length}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 pt-6">
                    {
                        readList.map(book=><Book key={book.bookId} book={book}></Book>)
                    }
                
            </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Bucket List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;