import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import sideArrows from "../../../assests/switch.png"
import { useSelector } from "react-redux";
// import DeliveryRestaurantsCards from "./DeliveryRestaurantsCards.js";
import TopReataurantsCards from "./TopReataurantsCards.js";

const DeliveryRestaurants = () => {
  const topRestaurantsData = useSelector((store) => store.swiggyData.topRestaurants);
  const deliveryRestaurants = useSelector((store) => store.swiggyData.deliveryRestaurants);
  if (topRestaurantsData == null) return;
  if (deliveryRestaurants == null) return;

  return (
    <section className="padding-t">
      <h1 className="font-montserrat leading-normal font-bold  capitalize text-xl text-black flex items-center">Restaurants with online food delivery</h1>
      <div className="w-full flex items-center justify-evenly ">
        <div className=" flex items-center">
          <input placeholder="Search for food" className=" border-black border-2 px-[200px] py-2 outline-none pl-10 rounded-full" />
          <button className=""><FaSearch className="w-10" /></button>
        </div>
        <div>
          <button className="flex  shadow-xl px-4 py-3 bg-white   rounded-full"><FaFilter style={{ height: "24px", width: "24px" }} /><img className="h-[20px] w-[20px]" src={sideArrows} /></button>
        </div>
      </div>\
      <div className="">
      <span>
        {
          deliveryRestaurants.map((card) => <TopReataurantsCards card={card} />)
        }
      </span>
      <span>
        {
          topRestaurantsData.map((card) => <TopReataurantsCards card={card} />)
        }
      </span>
      </div>



    </section>
  )
}

export default DeliveryRestaurants