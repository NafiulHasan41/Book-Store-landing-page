import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const NormalCard = ({book}) => {

    const {bookId,bookName,author,image,rating,category,tags } = book;

    return (

        <Link to={`BigCard/${bookId}`}>

<div className='m-1'>
            <div className="card w-full bg-base-100 shadow-xl h-[500px]  items-center border border-gray-400">
                <figure className="px-12 pt-10 rounded-xl  ">
                  <img 
                    src={image}
                    alt={bookName}
                    className="rounded-xl w-[330px] h-[230px] bg-center"
                  />
                </figure>

                <div className="card-body">

               
                    
                   
                    <div  className='flex gap-3 text-start w-full'>
                    {
                            
                            tags.map( (ing , index) =>  <p key={index}
                                 className=" flex-auto text-center items-center bg-green-50 rounded-full p-1 px-3  text-xs font-semibold text-green-600 w-full">
                                 {ing}
                                </p>
                               )
                        }
                    </div>
                       
                    

                 


                  <div className=" border-b border-dashed border-gray-500 pb-5 mb-1">
                    <h2 className=" text-xl font-semibold text-black text-start">
                      {bookName}
                    </h2>

                    <p className=' font-medium text-[14px] text-black mt-3'>By : {author}</p>
                   
                  </div>

                  <div className='flex justify-between'>
                    <div>
                      <p>{category} </p>
                    </div>

                    <div >
                        <p className=' text-[16px] flex gap-2 items-center text-center' >{rating} <CiStar></CiStar> </p>
                    </div>
                  </div>
               

               
                 
                </div>
              </div> 
        </div>
        </Link>
        
    );
};

NormalCard.propTypes = {
    book : PropTypes.object 

}

export default NormalCard;