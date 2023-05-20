import React from 'react';
import { Link } from 'react-router-dom';

const ToyTable = ({toy , index}) => {
    const {sellerName ,name ,price, quantity, _id}=toy
    console.log(toy);
    return (
        <tbody>
        <tr>
        <th>{index+1}</th> 
        <td>{sellerName}</td> 
        <td>{name}</td> 
        <td>${price}</td> 
        <td>{quantity}</td> 
        <td>

            <Link to={`/viewDetails/${_id}`}>
            <button className="btn btn-outline btn-warning">View Details</button>

            </Link>
            </td>

      </tr>
      </tbody>
    );
};

export default ToyTable;