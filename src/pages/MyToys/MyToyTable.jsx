import React from 'react';
import { Link } from 'react-router-dom';

const MyToyTable = ({myToy ,index  ,handleDelete}) => {
    const {name,price,quantity,description, _id}=myToy
    return (
      
<tbody>
      <tr>
        <th>{index+1}</th> 
        <td>{name}</td> 
        <td>{price}</td> 
        <td>{quantity}</td> 
        <td>{description}</td> 
        <td>
            <Link to={`/update/${_id}`}>
            <button className="btn btn-outline btn-warning">Update</button>
            </Link>
        </td>
        <td><button
         onClick={() => handleDelete(_id)}
         className="btn btn-outline btn-error">Delete</button></td>

      </tr>
      


    </tbody> 
      
    );
};

export default MyToyTable;