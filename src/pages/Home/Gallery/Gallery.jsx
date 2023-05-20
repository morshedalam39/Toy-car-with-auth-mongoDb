import React, { useEffect } from "react";
import Gallery1 from '../../../assets/Gallery/Gallery5.jpg'
import Gallery2 from '../../../assets/Gallery/Gallery1.jpg'
import Gallery3 from '../../../assets/Gallery/Gallery2.jpg'
import Gallery4 from '../../../assets/Gallery/Gallery3.jpg'
import Gallery5 from '../../../assets/Gallery/Gallery4.jpg'
import AOS from "aos";
import "aos/dist/aos.css"


const Gallery = () => {

  useEffect(() => {
    AOS.init({duration: 2000});
}, [])





  return (
    <div>

<h1 className="text-center text-4xl font-bold py-8">
              Our Top Cars Gallery
              <hr className="w-80 mt-2 border-[3px] mx-auto border-yellow-400" />
            </h1>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img data-aos="fade-up" data-aos-anchor-placement="top-center" 
            src={Gallery1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img data-aos="fade-up" data-aos-anchor-placement="top-center" 
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={Gallery2}
          />
          <img data-aos="fade-up" data-aos-anchor-placement="top-center" 
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={Gallery3}
          />
          <img data-aos="fade-up" data-aos-anchor-placement="top-center" 
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={Gallery4}
          />
          <img data-aos="fade-up" data-aos-anchor-placement="top-center" 
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={Gallery5}
          />

        </div>
      </section>
    </div>
  );
};



export default Gallery;
