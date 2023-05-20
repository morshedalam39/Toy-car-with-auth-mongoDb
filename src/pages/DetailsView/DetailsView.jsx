import React from 'react';
import { useLoaderData } from 'react-router-dom';


import ReactStarsRating from 'react-awesome-stars-rating';

const DetailsView = () => {
    const toyDetails=useLoaderData();
    const {name , photo, sellerName,sellerEmail,price,ratting,quantity,description}=toyDetails
    console.log(toyDetails);
    
    return (


        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure className='md:w-7/12'><img className='h-96 rounded-lg' src={photo} alt="Album"/></figure>
  <div className="card-body w-5/12 ">
    <h2 className=" text-2xl font-bold">Toy Name:{name}</h2>
    <p className='text-lg font-normal'>Seller Name:{sellerName}</p>
    <p className='text-lg font-normal'>Seller Email:{sellerEmail}</p>
    <p className='text-lg font-normal'>Price:${price}</p>
    <p className='text-lg font-normal'>Available Quantity:{quantity}</p>
    <p >Detail Description:{description}</p>
    <div className="card-actions justify-end">
    <ReactStarsRating isEdit={false} className="flex" value={+ratting} />
    </div>
  </div>
</div>
    );
};

export default DetailsView;

