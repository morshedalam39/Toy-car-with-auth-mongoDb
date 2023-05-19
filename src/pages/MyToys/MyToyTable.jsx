import React from 'react';

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
        <td><button className="btn btn-outline btn-warning">Update</button></td>
        <td><button
         onClick={() => handleDelete(_id)}
         className="btn btn-outline btn-error">Delete</button></td>

      </tr>
      


    </tbody> 
      
    );
};

export default MyToyTable;