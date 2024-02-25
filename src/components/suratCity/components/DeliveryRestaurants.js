import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import sideArrows from "../../../assests/switch.png"
import { useSelector } from "react-redux";
// import DeliveryRestaurantsCards from "./DeliveryRestaurantsCards.js";
import TopReataurantsCards from "./TopReataurantsCards.js";
import { useState } from "react";
import DeliveryRestaurantsModal from "../utils/DeliveryRestaurantsModal.js";

const DeliveryRestaurants = () => {
  const [search,setSearch] = useState("");
  const [deliveryModal,setDeliveryModal] = useState(false);
  
  const topRestaurantsData = useSelector((store) => store.swiggyData.topRestaurants);
  const deliveryRestaurants = useSelector((store) => store.swiggyData.deliveryRestaurants);
  if (topRestaurantsData == null) return;
  if (deliveryRestaurants == null) return;
  const handleFilter = ()=>{
    setDeliveryModal(true);
  }
  return (
    <section className="padding-t">
      <h1 className="font-montserrat leading-normal font-bold  capitalize text-xl text-black flex items-center">Restaurants with online food delivery</h1>
      <div className="w-full flex items-center justify-evenly ">
        <div className=" flex items-center mt-12 space-x-10">
          <input placeholder="Search for food" className=" border-black border-2 px-[200px] py-2 outline-none pl-10 rounded-full" onChange={(e)=>setSearch(e.target.value)} />
          <button className="flex  shadow-xl px-4 py-3 bg-white justify-center items-center rounded-full hover:opacity-60"onClick={handleFilter}><FaFilter style={{ height: "24px", width: "24px" }} /><img className="h-[15px] w-[15px]" src={sideArrows} /></button>
        </div>
      </div>
      <div className="padding-t">
      <span>
        { 
          deliveryRestaurants.filter((card)=>{
            return search.toLowerCase()===""?card:card.info.name.toLowerCase().includes(search);
          }).map((card,index) => <TopReataurantsCards key={index} card={card} />)
        }
      </span>
      <span>
        {
          topRestaurantsData.filter((card)=>{
            return search.toLocaleLowerCase()===""?card:card.info.name.toLocaleLowerCase().includes(search);
          }).map((card,index) => <TopReataurantsCards key={index} card={card} />)
        }
      </span>
      </div>
      <div>
      {
        deliveryModal &&  <DeliveryRestaurantsModal closeModal = {()=>setDeliveryModal(false)} deliveryRestaurants={deliveryRestaurants} topRestaurants={topRestaurantsData} />
      }
      </div>


    </section>
  )
}

export default DeliveryRestaurants