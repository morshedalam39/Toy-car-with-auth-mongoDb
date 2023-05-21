import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCategoryCard from './ShopCategoryCard';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import AOS from "aos";
import "aos/dist/aos.css"


const ShopCategory = () => {
    const {user}=useContext(AuthContext)

    const [category, setCategory]=useState('Police Car');
    const [catData , setCatData]=useState([]);

    
	useEffect(() => {
		AOS.init({duration: 3000});
	}, [])

    useEffect(() => {
        fetch(`https://toy-car-server-lac.vercel.app/category/${category}`)
          .then((res) => res.json())
          .then((data) => {
            setCatData(data);
            
          });
      }, [category]);
    //   console.log(catData);


    const handelToast =()=>{
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Login First',
               
              })
        }

    }


    return (
        <div className='mt-10'>
              <Tabs className="text-center">
    <TabList >
      <Tab onClick={()=>setCategory('Police Car')}>Police Car</Tab>
      <Tab onClick={()=>setCategory('Sports Car')}>Sports Car</Tab>
      <Tab onClick={()=>setCategory('Mini Car')}>Mini Car</Tab>
    </TabList>


   <div className='grid md:grid-cols-3 gap-6 ' data-aos="zoom-in">
{
        catData?.map((cat) => <ShopCategoryCard
          key={cat._id}
          cat={cat}
          handelToast={handelToast}

      ></ShopCategoryCard>)
      }
      </div>
   
  </Tabs>
        </div>
    );
};

export default ShopCategory;