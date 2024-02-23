import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import TopReataurantsCards from "./TopReataurantsCards";
import { FaAngleDoubleLeft,FaAngleDoubleRight  } from "react-icons/fa";

const TopRestaurant = () => {
  const topRestaurantData = useSelector((store)=>store.swiggyData.topRestaurants);
  if(topRestaurantData==null) return;
  const leftSlide = ()=>{
    const slider = document.querySelector("#slide");
    slider.scrollLeft = slider.scrollLeft - 600;
  }
  const rightSlide = ()=>{
    const slider = document.querySelector("#slide");
    slider.scrollLeft = slider.scrollLeft + 600;
  }
  return (
    <div className="padding-t">
        <h1 className="font-montserrat leading-normal font-bold  capitalize text-xl text-black flex items-center">Top restaurant chains in Surat</h1>
        <div className="right-0 flex justify-end items-center gap-5">
        <button className="bg-gray-300 rounded-full p-2 hover:text-gray-700"onClick={leftSlide}><FaAngleDoubleLeft /></button>
        <button className="bg-gray-300 rounded-full p-2 hover:text-gray-700"onClick={rightSlide}><FaAngleDoubleRight /></button>
        </div>
        <div id="slide" className="flex items-center mt-2  overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {
          topRestaurantData.map((card)=><TopReataurantsCards key={card.info.id} card={card}/>)
        }
        </div>
    </div>
  )
}

export default TopRestaurant