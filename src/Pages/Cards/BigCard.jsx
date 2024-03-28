import { useLoaderData, useParams } from "react-router-dom";
import { getReadBook, getWishBook, saveReadBook, saveWishBook } from "../../Utility/LocalStorage";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import {  ToastContainer, toast } from "react-toastify";

const BigCard = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find((job) => job.bookId === idInt);
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const [readBook, setReadBook] = useState([]);

  const handleReadBook = () => {
    const storeReadBook = getReadBook();
    setReadBook(storeReadBook);
    const exists = storeReadBook.find((idCur) => idCur === idInt);
    if (!exists) {
      saveReadBook(idInt);
      const storeReadBook = getReadBook();
     setReadBook(storeReadBook);
      toast.success('The Book is Added Read Books !');
    }
    else
    {
        toast.error('Book is Already Added to Read Books!');
    }
  };




  const handleWishList = () => {

    const isExistsRead = readBook.find((idCur) => idCur === idInt);

    if(isExistsRead)
    {
        toast.error('Book is Already Added to Read Books!');
    }
    else
    {
          
    const storeWishBook = getWishBook();
    const exists = storeWishBook.find(wishId => wishId === idInt);

    if(exists)
    {
        toast.error('Book is Already Added to Wish List!');
    }
    else
    {  
        saveWishBook(idInt);
        toast.success('The Book is Added Wish List ! ');
    }

    }




  };

  return (
    <div className="w-[95%] md:w-[82.5%] max-w-[1320px] mx-auto mt-5 md:mt-10  mb-10 md:mb-24 ">
      <div className="hero md:max-h-[700px]   rounded-3xl">
        <div className="hero-content flex-col lg:flex-row justify-between w-full gap-2 md:gap-4">
          <div className=" flex-1 bg-[#1313130D]/5 rounded-3xl">
            <img
              src={image}
              className=" w-[60%] md:w-[70%] mx-auto rounded-lg p-2  md:p-4"
            />
          </div>

          <div className=" flex-1 text-start p-5">
            <h1 className=" text-2xl md:text-4xl text-black font-bold">
              {bookName}{" "}
            </h1>
            <p className=" my-3 text-xl font-medium text-gray-500 border-b pb-3 border-black">
              By : {author}{" "}
            </p>

            <div className="border-b pb-3 border-black text-2xl text-black font-semibold my-3">
              Category : <span className=" text-gray-500">{category}</span>
            </div>
            <div className=" text-gray-400 text-xs font-normal my-3">
              <span className=" text-xl text-black font-semibold">
                Review :{" "}
              </span>{" "}
              {review}
            </div>
            <div className=" flex gap-4  my-3  border-b pb-3 border-black ">
              <span className=" text-xl text-black font-semibold">Tag : </span>
              <div className="flex gap-3 text-start ">
                {tags.map((ing, index) => (
                  <p
                    key={index}
                    className=" flex-auto text-center items-center bg-green-50 rounded-full p-1 px-3  text-xs font-semibold text-green-600 w-full"
                  >
                    {ing}
                  </p>
                ))}
              </div>
            </div>

            <div className=" text-start my-3">
              <p className="text-[16px] text-gray-400 font-normal">
                Number of Page :{" "}
                <span className=" font-semibold text-black">
                  {" "}
                  {totalPages}{" "}
                </span>
              </p>
              <p className="text-[16px] text-gray-400 font-normal">
                Publisher :{" "}
                <span className=" font-semibold text-black"> {publisher} </span>
              </p>
              <p className="text-[16px] text-gray-400 font-normal">
                Year of Publishing :{" "}
                <span className=" font-semibold text-black">
                  {yearOfPublishing}{" "}
                </span>
              </p>
              <p className="text-[16px] text-gray-400 font-normal">
                Rating{" "}
                <span className=" font-semibold text-black"> : {rating} </span>
              </p>
            </div>

            <div className="flex gap-5 text-[18px] font-semibold">
              <button onClick={handleReadBook} className="btn bg-transparent border border-gray-400">
                Read
              </button>
              <button onClick={handleWishList} className="btn bg-[#59C6D2] border-none">Wishlist</button>
            </div>
          </div>
        </div>
      </div>

      {/* for toast */}

       <ToastContainer
       />
    </div>
  );
};

export default BigCard;
