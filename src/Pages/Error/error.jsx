import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className=" text-center items-center m-4 text-xl md:m-10 p-4 space-x-3 text-red-600">
      <h1 className=" my-4">Oops!</h1>
      <p className=" my-4"> Sorry, an unexpected error has occurred.</p>
      <p className=" my-4" >
        <i>{error.statusText || error.message}</i>
      </p>

      <div className=" my-4">
       <NavLink to="/" > <button className=" text-black  btn btn-error
         hover:bg-green-400" >
        Go Back Home</button> </NavLink>
      </div>
    </div>
  );
}