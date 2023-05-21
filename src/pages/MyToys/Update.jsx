import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const Update = () => {
  useTitle('Update Toy')
    const toy=useLoaderData();
    const {description ,quantity, price , _id}=toy;
    console.log(toy);

    const handelUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        console.log(price, quantity,description);
        const data={price, quantity,description}

        fetch(`https://toy-car-server-lac.vercel.app/updateToy/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
            Swal.fire({
                title: 'Success!',
                text: 'Toy Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
            })
        }
        console.log(result);
      });
    }
    return (
        <div>
             <div className="max-w-2xl mx-auto">
      <form onSubmit={handelUpdate} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">



        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              placeholder="Enter price"
              name='price'
              defaultValue={price}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
            Available Quantity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="quantity"
            type="number"
            placeholder="Enter available quantity"
            name='quantity'
            defaultValue={quantity}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Detail Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            rows="4"
            placeholder="Enter detail description"
            name='description'
            defaultValue={description}
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
        <input
              type="submit"
              value="submit"
              className="btn btn-warning hover:bg-yellow-600 
              
              "
            />
        </div>
      </form>
    </div>
        </div>
    );
};

export default Update;