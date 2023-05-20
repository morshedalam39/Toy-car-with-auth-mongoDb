import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToyTable from './MyToyTable';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const Mytoys = () => {
    useTitle('My Toys')
    const{user}=useContext(AuthContext);
    const [myToy , setMyToy]=useState([]);
    // const [short , Setshort]=useState(short)


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


                fetch(`http://localhost:5000/myToy/${_id}`, {
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
        fetch(`http://localhost:5000/myToys/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setMyToy(data);
            
          });
      }, [user]);
    console.log(myToy);
    return (
        <div>
            <div className="overflow-x-auto">
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
        <th><div className="dropdown">
  <label tabIndex={0} className="btn m-1">Click</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div></th>

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