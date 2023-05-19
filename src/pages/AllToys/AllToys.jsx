import React, { useEffect, useState } from 'react';
import ToyTable from './ToyTable';

const AllToys = () => {
    const [toys , setToys]=useState() 

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])
    console.log(toys);
    return (
        <div>
          <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th>No</th> 
        <th>Seller Name</th> 
        <th>Toy Name</th> 
        <th>Price</th> 
        <th>Available Quantity</th> 
        <th>Action</th>

      </tr>
    </thead> 
    

        {
          toys?.map((toy , index) => <ToyTable
            key={toy._id}
            toy={toy}
            index={index}
        ></ToyTable>)
        }



    

  </table>
</div>
        </div>
    );
};

export default AllToys;