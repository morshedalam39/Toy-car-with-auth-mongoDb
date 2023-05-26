

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