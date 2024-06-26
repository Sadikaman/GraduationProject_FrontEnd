import React, { useRef } from 'react';
import { Card } from "flowbite-react";
import { CiStar } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
const CardContainer = () => {
  
  // Array of card data
  const cardsData = [
    { id: 1, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/images.jpeg" },
    { id: 2, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/images.jpeg" },
    { id: 3, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/images.jpeg" },
    { id: 4, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/images.jpeg" },
    { id: 5, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/images.jpeg" },
    { id: 6, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/images.jpeg" },
    { id: 7, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/images.jpeg" },
    { id: 8, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/images.jpeg" },
    { id: 9, name: "Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/images.jpeg" },
    { id: 10, name:"Popular Destination", rating: 4.5, price: "NRT, Indonesia", imageSrc: "/images.jpeg" }
    
    // Add more card data objects as needed
  ];

  const sliderRef = useRef(null);

  // Function to handle next button click
  const next = () => {
    sliderRef.current.slickNext();
  };

  // Function to handle previous button click
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium screen breakpoint
        settings: {
          slidesToShow: 2, // Number of slides to show on medium screens
        },
      },
      {
        breakpoint: 640, // Small screen breakpoint
        settings: {
          slidesToShow: 1, // Number of slides to show on small screens
        },
      },
    ],
  };

  return (
    <div className=" dark:bg-gray-900 dark:text-white p-5">
      <div className='flex justify-between  flex-wrap'>
      <div className='pt-10 flex-wrap'>
      <h1 className='text-2xl pt-2 font-extrabold'>Popular Destinations</h1>
      <p className='text-md pt-2'>Unleash Your Wanderlust With Sky Wings</p>
      </div>
      <div className="mt-4 flex-wrap">
        <button className="  font-bold py-2 px-4 rounded-l" onClick={previous}>
        <FaChevronCircleLeft  style={{fontSize:"40px"}}/>
        </button>
        <button className="  font-bold py-2 px-4 rounded-r" onClick={next}>
        <FaChevronCircleRight style={{fontSize:"40px"}}/>
        </button>
      </div>
      </div>
      <Slider {...sliderSettings} ref={sliderRef}>
        {cardsData.map((card) => (
          <div key={card.id} className="p-4 flex flex-wrap">
            <Card className="xl:w-80 md:w-96 sm:w-80 rounded-3xl " imgAlt={`Image of ${card.name}`} imgSrc={card.imageSrc}>
              <div className='flex justify-between flex-wrap'>
                <a href="#">
                  <h1 className="text-xl font-semibold tracking-tight text-center text-gray-900 dark:text-white">
                    {card.name}
                  </h1>
                </a>
                <div className="bg-blue-500 w-16 p-1 rounded-full flex items-center justify-center">
                  <span className="text-white"><CiStar style={{ color: "white" }} /></span>
                  <span className="text-white ml-2">{card.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between flex-wrap">
                <span className="text-lg flex font-bold text-gray-900 dark:text-white gap-2"><IoLocationSharp />${card.price}</span>
               
              </div>
            </Card>
          </div>
        ))}
      </Slider>
      
    </div>
  );
}

export default CardContainer;
