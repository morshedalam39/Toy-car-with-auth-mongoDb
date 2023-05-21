import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToyTable from './MyToyTable';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const Mytoys = () => {
    useTitle('My Toys')
    const{user}=useContext(AuthContext);
    const [myToy , setMyToy]=useState([]);
    const [short , Setshort]=useState(0)


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://toy-car-server-lac.vercel.app/myToy/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )

                            const remaining = myToy.filter(cof => cof._id !== _id);
                            setMyToy(remaining);
                        }
                    })

            }
        })
    }

    useEffect(() => {
        fetch(`https://toy-car-server-lac.vercel.app/myToys?email=${user.email}&num=${short}`)
          .then((res) => res.json())
          .then((data) => {
            setMyToy(data);
            
          });
      }, [user, short]);
    console.log(myToy);
    return (
        <div>
            <div className='w-full bg-slate-100'>
            <div className="btn-group flex justify-center">

  <button onClick={()=>Setshort(-1)} className={`${short == -1 ? "btn btn-warning " :"btn btn-outline btn-warning"}`}>High Price</button>
  <button onClick={()=>Setshort(1)} className={`${short == 1 ? "btn btn-warning " :"btn btn-outline btn-warning"}`}>Low Price</button>
</div>
            </div>
            <div className="overflow-x-auto mt-5">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th>No</th> 
        <th>Toy Name</th> 
        <th>Price</th> 
        <th>Available Quantity</th> 
        <th>Detail description</th>
        <th>Action</th>
        <th>Action</th>


      </tr>
    </thead> 

    
       {
        myToy?.map((myToy , index) => <MyToyTable
          key={myToy._id}
          myToy={myToy}
          index={index}
          handleDelete={handleDelete}
      ></MyToyTable>)
      }
    


  </table>
</div>
        </div>
    );
};

export default Mytoys;