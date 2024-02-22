import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import TopReataurantsCards from "./TopReataurantsCards";

const TopRestaurant = () => {
  const topRestaurantData = useSelector((store)=>store.swiggyData.swiggyApiSlice);
  if(topRestaurantData==null) return
  return (
    <div className="padding-t">
        <h1 className="font-montserrat leading-normal font-bold  capitalize text-xl text-black flex items-center">Top restaurant chains in Surat</h1>
        <div className="flex items-center mt-2  overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {
          topRestaurantData.map((card)=><TopReataurantsCards key={card.info.id} card={card}/>)
        }
        </div>
    </div>
  )
}

export default TopRestaurant