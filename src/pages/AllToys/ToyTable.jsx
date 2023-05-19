import React from 'react';

const ToyTable = ({toy , index}) => {
    const {sellerName ,name ,price, quantity}=toy
    console.log(toy);
    return (
        <tbody>
        <tr>
        <th>{index+1}</th> 
        <td>{sellerName}</td> 
        <td>{name}</td> 
        <td>${price}</td> 
        <td>{quantity}</td> 
        <td><button className="btn btn-outline btn-warning">View Details</button></td>

      </tr>
      </tbody>
    );
};

export default ToyTable;