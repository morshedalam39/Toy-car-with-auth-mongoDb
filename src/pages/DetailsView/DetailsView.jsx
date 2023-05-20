import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactDOM from 'react-dom';

import ReactStarsRating from 'react-awesome-stars-rating';

const DetailsView = () => {
    const toyDetails=useLoaderData();
    const {name , photo, sellerName,sellerEmail,category,price,ratting,quantity,description}=toyDetails
    console.log(toyDetails);
    return (
        <div className='flex flex-col md:flex-row gap-5'>

            <div className='w-full  md:w-6/12'>

                <img className='w-full rounded-lg' src={photo} alt="" />

            </div>
            <div className='w-full md:w-5/12'>

            <ReactStarsRating isEdit={false} className="flex" value={+ratting} />;


            </div>

        </div>
    );
};

export default DetailsView;