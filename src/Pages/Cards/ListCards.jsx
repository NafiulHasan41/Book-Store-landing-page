import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { MdOutlineContactPage } from "react-icons/md";

const ListCards = ({ book }) => {
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="hero min-h-[280px] bg-base-100 border m-4 p-2 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row rounded-2xl">
        <img
          src={image}
          className=" max-w-[150px] md:max-w-[230px] md:h-[280px] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className=" text-xl md:text-3xl font-bold">{bookName} </h1>
          <p className=" my-3 text-xs md:text-xl font-medium text-black ">
            By : {author}{" "}
          </p>
          <div className=" flex flex-col md:flex-row gap-4  my-3   ">
            <span className=" text-xs md:text-xl text-black font-semibold">
              Tag :{" "}
            </span>
            <div className="flex flex-col md:flex-row gap-3 text-start ">
              {tags.map((ing, index) => (
                <p
                  key={index}
                  className=" flex-auto text-center items-center bg-green-50 rounded-full p-1 px-3  text-xs font-semibold text-green-600 w-full"
                >
                  #{ing}
                </p>
              ))}
            </div>

            <div className=" text-gray-500 text-xs md:text-xl font-semibold flex gap-2 items-center">
              <CiLocationOn /> <span>Year of Publishing :</span>{" "}
              {yearOfPublishing}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4  my-3 border-b pb-3 border-black">
            <div>
              <p className="flex items-center gap-2">
                <span>
                  <GoPeople />{" "}
                </span>{" "}
                Publisher : <span className=" text-green-500">{publisher}</span>{" "}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2">
                <span>
                  <MdOutlineContactPage />{" "}
                </span>{" "}
                Pages : <span className=" text-green-500">{totalPages}</span>{" "}
              </p>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row gap-4 ">
            <p className=" flex-auto text-center items-center bg-[#328EFF26]/15 rounded-full p-1 px-3  text-xs font-semibold text-[#328EFF] w-[150px]">
            Category : {category}
            </p>
            <p className=" flex-auto text-center items-center bg-[#FFAC3326]/15 rounded-full p-1 px-3  text-xs font-semibold text-[#FFAC33] w-[150px]">
            Rating : {rating}
            </p>
            <p className=" flex-auto text-center items-center bg-green-500 rounded-full p-1 px-3  text-xs font-semibold text-white w-[150px]">
            View Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ListCards.propTypes = {
  book: PropTypes.object,
};

export default ListCards;
