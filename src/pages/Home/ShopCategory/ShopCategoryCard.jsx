import { Link } from "react-router-dom";
import { TabPanel } from "react-tabs";
import ReactStarsRating from 'react-awesome-stars-rating';


const ShopCategoryCard = ({cat ,handelToast}) => {
    
    const {photo,name,price,ratting,category, _id
    }=cat
    console.log(cat.category);
    return (

            
 <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo}alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name:{name}</h2>
    <p>Price:${price}</p>
    <ReactStarsRating isEdit={false} className="flex" value={+ratting} />
    <div className="card-actions">
      <Link to={`/viewDetails/${_id}`}><button onClick={handelToast} className="btn btn-warning hover:bg-yellow-600">VIEW DETAILS</button></Link>
    </div>
  </div>
</div>
  

    );
};

export default ShopCategoryCard;