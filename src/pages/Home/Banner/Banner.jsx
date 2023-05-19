import React from "react";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img5.jpg";

// import img2 from '../../../assets/images/banner/2.jpg';
// import img3 from '../../../assets/images/banner/3.jpg';
// import img4 from '../../../assets/images/banner/4.jpg';

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] mx-auto w-full">
          <div className="text-white space-y-7 text-center ">
            <h2 className="text-3xl font-bold">
            Fuel your child's creativity with our  diverse <br /> toy car collection
            </h2>
            <p className="text-lg">
             
Race into excitement with our top-quality toy cars. Ignite imagination, fuel play, and create lasting memories. Start the fun now!
            </p>
            <div>
              <button className="btn btn-outline btn-warning px-8">Get 
               Start</button>
             
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] mx-auto w-full">
        <div className="text-white space-y-7 text-center ">
            <h2 className="text-3xl font-bold">
            Fuel your child's creativity with our  diverse <br /> toy car collection
            </h2>
            <p className="text-lg">
             
Race into excitement with our top-quality toy cars. Ignite imagination, fuel play, and create lasting memories. Start the fun now!
            </p>
            <div>
              <button className="btn btn-outline btn-warning px-8">Get 
               Start</button>
             
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] mx-auto w-full">
        <div className="text-white space-y-7 text-center ">
            <h2 className="text-3xl font-bold">
            Fuel your child's creativity with our  diverse <br /> toy car collection
            </h2>
            <p className="text-lg">
             
Race into excitement with our top-quality toy cars. Ignite imagination, fuel play, and create lasting memories. Start the fun now!
            </p>
            <div>
              <button className="btn btn-outline btn-warning px-8">Get 
               Start</button>
             
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] mx-auto w-full">
        <div className="text-white space-y-7 text-center ">
            <h2 className="text-3xl font-bold ">
            Fuel your child's creativity with our  diverse <br /> toy car collection
            </h2>
            <p className="text-lg">
             
Race into excitement with our top-quality toy cars. Ignite imagination, fuel play, and create lasting memories. Start the fun now!
            </p>
            <div>
              <button className="btn btn-outline btn-warning px-8">Get 
               Start</button>
             
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
