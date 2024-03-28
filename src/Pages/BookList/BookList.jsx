import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBook, getWishBook } from "../../Utility/LocalStorage";
import ListCards from "../Cards/ListCards";

const BookList = () => {
  const books = useLoaderData();

  const [readBooks, setREadBooks] = useState([]);
  const [displayRB, setDisplayRB] = useState([]);

  const [wishList, setWishList] = useState([]);
  const [displayWL, setDisplayWL] = useState([]);

  useEffect(() => {
    const storedReadBooks = getReadBook();
    if (books.length > 0) {
      const bookRead = books.filter((job) =>
        storedReadBooks.includes(job.bookId)
      );

      setREadBooks(bookRead);
      setDisplayRB(bookRead);
    }
  }, [books]);

  useEffect(() => {
    const storedWishBooks = getWishBook();
    if (books.length > 0) {
      const bookWish = books.filter((job) =>
        storedWishBooks.includes(job.bookId)
      );

      setWishList(bookWish);
      setDisplayWL(bookWish);
    }
  }, [books]);


  const handleBookSorting = value => {
      
    if(value === 'rating')
    {
       const newArrayWL = [...wishList];
       newArrayWL.sort((a, b) => a.rating - b.rating);
       setDisplayWL(newArrayWL);

       const newArrayRB = [...readBooks];
       newArrayRB.sort((a, b) => a.rating - b.rating);
       setDisplayRB(newArrayRB);

       
    }
    else if( value === 'pages') {

        const newArrayWL = [...wishList];
       newArrayWL.sort((a, b) => a.totalPages - b.totalPages);
       setDisplayWL(newArrayWL);

       const newArrayRB = [...readBooks];
       newArrayRB.sort((a, b) => a.totalPages - b.totalPages);
       setDisplayRB(newArrayRB);


    }
    else if(value === 'year'){
        
        const newArrayWL = [...wishList];
        newArrayWL.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        setDisplayWL(newArrayWL);
 
        const newArrayRB = [...readBooks];
        newArrayRB.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        setDisplayRB(newArrayRB);

    }
    else if(value === 'default')
    {
        const newArrayWL = [...wishList];
        setDisplayWL(newArrayWL);
 
        const newArrayRB = [...readBooks];
        setDisplayRB(newArrayRB);
    }

  }

  

  return (
    <div className="w-[95%] md:w-[82.5%] max-w-[1320px] mx-auto mt-5 md:mt-10  mb-10 md:mb-24  ">
      <div className=" w-full  bg-[#1313130D]/5 rounded-xl ">
        <h1 className=" text-center text-3xl text-black font-bold p-5">
          Books
        </h1>
      </div>

      <div className=" text-center mt-5">
        <select className="select select-bordered w-full max-w-[150px] bg-green-500 border-green-500"
        onChange={(event) => handleBookSorting(event.target.value)}>
          <option disabled selected>
            Sort By
          </option>
          <option value="default" >Default</option>
          <option value="rating" >Rating</option>
          <option value="pages">Number of pages</option>
          <option value="year">Publisher year</option>
        </select>
      </div>
      {/* tab section  */}
      <div className=" mt-10">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Read Books"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div className=" my-10">
              {displayRB.map((book) => (
                <ListCards key={book.bookId} book={book}></ListCards>
              ))}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist Books"
            
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div className=" my-10">
              {displayWL.map((book) => (
                <ListCards key={book.bookId} book={book}></ListCards>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
