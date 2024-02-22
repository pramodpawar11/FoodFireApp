import {TopRestaurantCards_URL} from "../../../utils/Constants";
const TopReataurantsCards = ({card}) => {
 const {cloudinaryImageId,name,cuisines,avgRating,sla} = card.info;
 return (
    <div className="inline-block p-1 cursor-pointer hover:scale-95 ease-in-out duration-300 md:shadow-lg">
      <img className="w-[250px]  h-[180px] max-sm:w-[120px] max-sm:h-[80px] rounded-lg  " src={TopRestaurantCards_URL + cloudinaryImageId} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2 w-52 overflow-hidden truncate max-md:text-sm max-md:w-24">{name}</div>
        <span className="text-gray-700 text-base mr-2">{avgRating}</span>
        <span className="text-gray-700 text-base mb-2">{sla.slaString}</span>
        <p className="text-gray-700 text-base mb-2 w-52 overflow-hidden truncate max-md:w-24">{cuisines.join(', ')}</p>
       
        {/* You can add more details or customize as needed */}
      </div>
    
    </div>
  );
}

export default TopReataurantsCards