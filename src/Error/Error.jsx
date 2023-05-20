// import React from "react";
// import { useNavigate, useRouteError } from "react-router-dom";
// import { FaAngleLeft } from "react-icons/fa";
// import img404 from "../assets/error.gif";


// const Error = () => {
//   const { status, statusText } = useRouteError();
//   const navigate = useNavigate();
//   return (
//     <>

//       <section className="py-5">
//         <div className="container">
//           <div className="card max-w-sm mx-auto bg-gray-200/60">
//             <figure>
//               <img src={img404} alt="" />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">Oops!</h2>
//               <h4 className="font-medium">
//                 {status && statusText ? status + " " + statusText : null}
//               </h4>
//               <p className="text-gray-500">
//                 Sorry, an error has occurred, Requested page not found!
//               </p>
//               <div className="card-actions justify-end">
//                 <button
//                   className="btn btn-sm btn-accent"
//                   onClick={(_) => navigate(-1)}
//                 >
//                   <FaAngleLeft />
//                   <span>Back</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </>
//   );
// };

// export default Error;

import React from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import error from '../assets/error.gif'
import useTitle from '../hooks/useTitle';

const Error = () => {
    useTitle('Error')
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
      setShow(true);
    }, []);
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-100">
      <Transition
        show={show}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
          <img
            src={error}
            alt="Error"
            className="mx-auto w-72 mb-6"
          />
          <h1 className="text-2xl text-red-600 font-bold mb-4">Error 404</h1>
          <p className="text-gray-600 mb-4">
            Oops! The page you are looking for could not be found.
          </p>
          <Link
            to="/"
            className="inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </Transition>
    </div> 
        </div>
    );
};

export default Error;