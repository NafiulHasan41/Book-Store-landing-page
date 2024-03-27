import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NormalCard from "../Cards/NormalCard";

const Home = () => {
  
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('fakeBook.json')
        .then( res => res.json())
        .then( data => setBooks(data) );
    } ,[])

  return (
    <div className="w-[95%] md:w-[82.5%] max-w-[1320px] mx-auto mt-5 md:mt-10  mb-10 md:mb-24  ">

      <div className="hero min-h-[55px] bg-[#fafaec] rounded-3xl p-2 md:p-5 my-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" flex-1 w-full">
            <img
              src="https://img.freepik.com/free-psd/3d-rendering-back-school-icon_23-2149589337.jpg"
              className=" w-[70%] mx-auto rounded-lg shadow-2xl"
            />
          </div>

          <div className=" flex-1  ">
            <div className=" w-[90%] mx-auto">
              <h1 className="text-4xl my-8  md:text-5xl font-bold">Books to freshen <br/> up your bookshelf</h1>
              
              <NavLink to="/bookList" > <button className="btn btn-primary bg-[#23BE0A] border-none 
             text-white font-bold text-[16px] md:text-xl">View The List</button></NavLink>
            </div>
          </div>
        </div>
      </div>
      
      <h1 className=" text-center my-10 text-[40px] font-bold text-black">Books</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          
            {
                 books.map( book  => <NormalCard key={book.bookId} book={book}  ></NormalCard> )
            }
            
           
        </div>


    </div>
  );
};

export default Home;
