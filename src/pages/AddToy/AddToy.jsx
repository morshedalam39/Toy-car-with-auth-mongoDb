import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  useTitle("Add Toys")
  const {user}=useContext(AuthContext);
  const handelAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const sellerName =user?.displayName;
    const sellerEmail = user?.email;
    const category = form.category.value;
    const price = form.price.value;
    const ratting = form.ratting.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    // console.log({name , photo, sellerName,sellerEmail,category,price,ratting,quantity,description});

    const toyData = {
      name,
      photo,
      sellerName,
      sellerEmail,
      category,
      price,
      ratting,
      quantity,
      description,
    };
    console.log(toyData);

    fetch("https://toy-car-server-lac.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Toy Added successfully',
            showConfirmButton: false,
            timer: 1500

          })
          form.reset()
          
        }
      });
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <form
          onSubmit={handelAddToy}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
               Toy Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter Toy Name"
                name="name"
               
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="picture-url"
              >
                Picture URL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="picture-url"
                type="text"
                placeholder="Enter picture URL"
                name="photo"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="seller-name"
              >
                Seller Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="seller-name"
                type="text"
                placeholder="Enter seller name"
                name="sellerName"
                value={user?.displayName}
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="seller-email"
              >
                Seller Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="seller-email"
                type="email"
                placeholder="Enter Seller Email"
                name="sellerEmail"
                value={user?.email}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="sub-category"
              >
                Sub-category
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sub-category"
                name="category"
              >
                <option value="Police Car">Police Car</option>
                <option value="Sports Car">Sports Car</option>
                <option value="Mini Car">Mini Car</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                placeholder="Enter price"
                min="0"
                name="price"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="rating"
                type="number"
                step="0.1"
                min="0"
                max="5"
                placeholder="Enter rating"
                name="ratting"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="quantity"
              >
                Available Quantity
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="quantity"
                type="number"
                placeholder="Enter available quantity"
                min="0"
                name="quantity"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Detail Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              rows="4"
              placeholder="Enter detail description"
              name="description"
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

export default AddToy;

// import React from 'react';
// import { useForm } from 'react-hook-form';

// const AddToy = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//        <div className="max-w-6xl mx-auto">
//         <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <div className="flex flex-wrap -mx-2 mb-4">

//             <div className="w-full md:w-1/2 px-2">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="name"
//               >
//                 Name
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 type="text"
//                 placeholder="Enter name"
//                 name="name"
//                 {...register('name', { required: true })}
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-2">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="picture-url"
//               >
//                 Picture URL
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="picture-url"
//                 type="text"
//                 placeholder="Enter picture URL"
//                 name="photo"
//                 {...register('pictureURL', { required: true })}
//               />
//             </div>
//           </div>

//           <div className="flex flex-wrap -mx-2 mb-4">
//             <div className="w-full md:w-1/2 px-2">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="seller-name"
//               >
//                Seller Name
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="seller-name"
//                 type="text"
//                 placeholder="Enter seller name"
//                 name="sellerName"
//                 {...register('sellerName', { required: true })}
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-2">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="seller-email"
//               >
//                Seller Email
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="seller-email"
//                 type="email"
//                 placeholder="Enter Seller Email"
//                 name="sellerEmail"
//                 {...register('sellerEmail', { required: true })}
//               />
//             </div>
//           </div>

//           <div className="flex flex-wrap -mx-2 mb-4">
//             <div className="w-full md:w-1/2 px-2">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="sub-category"
//               >
//                 Sub-category
//               </label>
//               <select
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="sub-category"
//                 name="category"
//                 {...register('subCategory', { required: true })}
//               >
//                 <option value="category1">Police Car</option>
//                 <option value="category2">Sports Car</option>
//                 <option value="category3">Mini Car</option>
//               </select>
//             </div>
//             <div className="w-full md:w-1/2 px-2">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="price"
//               >
//                 Price
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="price"
//                 type="number"
//                 placeholder="Enter price"
//                 min="0"
//                 name="price"
//               {...register('price', { required: true })}
//               />
//             </div>
//           </div>

//           <div className="flex flex-wrap -mx-2 mb-4">
//             <div className="w-full md:w-1/2 px-2">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="rating"
//                 >
//                   Rating
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="rating"
//                 type="number"
//                 step="0.1"
//                 min="0"
//                 max="5"
//                 placeholder="Enter rating"
//                 name="ratting"
//                 {...register('rating', { required: true })}
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-2">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="quantity"
//                 >
//                   Available Quantity
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="quantity"
//                 type="number"
//                 placeholder="Enter available quantity"
//                 min="0"
//                 name="quantity"
//                 {...register('quantity', { required: true })}
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="description"
//             >
//               Detail Description
//             </label>
//             <textarea
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="description"
//               rows="4"
//               placeholder="Enter detail description"
//               name="description"
//               {...register('description', { required: true })}
//             ></textarea>
//           </div>
//           <div className="flex items-center justify-center">
//             <button
//               className="btn btn-warning hover:bg-yellow-600

//               "
//               type="button"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddToy;
