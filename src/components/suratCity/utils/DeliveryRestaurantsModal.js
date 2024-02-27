import { useDispatch, useSelector } from "react-redux";
import { addrating, addvalues } from "../../../utils/filterSlice";
import { addmergedRestaurants, addtopRestaurants } from "../../../utils/swiggyApiSlice";
import { useEffect } from "react";
const DeliveryRestaurantsModal = ({ closeModal, mergedRestaurants }) => {
    console.log(mergedRestaurants);
    const defaultMerged = useSelector((store)=>store.swiggyData.defaultMerged);
    const selectedValue = useSelector((store) => store.filterData.values);
    const dispatch = useDispatch();
    useEffect(() => {
        if (selectedValue === "rating") {
            const sortedResult = [...mergedRestaurants].sort((a, b) => parseFloat(b.info.avgRating) - parseFloat(a.info.avgRating));
            dispatch(addmergedRestaurants(sortedResult));
            
        }
        else if(selectedValue === "default") dispatch(addmergedRestaurants(defaultMerged));
        else if(selectedValue==="deliveryTime"){
            const sortedResult = [...mergedRestaurants].sort((a, b) => parseFloat(a.info.sla.deliveryTime) - parseFloat(b.info.sla.deliveryTime));
            dispatch(addmergedRestaurants(sortedResult));
        }
        else if(selectedValue === "lowToHigh"){
            
        }
    }, [selectedValue]);

    return (
        <div className="fixed inset-0 bg-black h-screen w-full bg-opacity-30 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 md:p-8 rounded-3xl shadow-md w-full max-w-md mx-auto space-y-2">
                <button className="cursor-pointer top-4 right-4 absolute text-xl max-sm:top-2" onClick={closeModal}>❌</button>
                <div className="flex flex-col">
                    <div className="flex flex-col space-y-5">
                        <label className="cursor-pointer font-montserrat font-medium">
                            <input className="cursor-pointer mr-2" type="radio" name="Sort" value="default" onChange={(e) => dispatch(addvalues(e.target.value))} />
                            Relevance (Default)
                        </label>

                        <label className="cursor-pointer font-montserrat  font-medium">
                            <input className="cursor-pointer mr-2" type="radio" name="Sort" value="deliveryTime" onChange={(e) => dispatch(addvalues(e.target.value))} />
                            Delivery Time
                        </label>

                        <label className="cursor-pointer font-montserrat font-medium">
                            <input className="cursor-pointer mr-2" type="radio" name="Sort" value="rating" onChange={(e) => dispatch(addvalues(e.target.value))} />
                            Rating
                        </label>
                        <label className="cursor-pointer font-montserrat font-medium">
                            <input className="cursor-pointer mr-2" type="radio" name="Sort" value="lowToHigh" onChange={(e) => dispatch(addvalues(e.target.value))} />
                            Cost: Low to High
                        </label>
                        <label className="cursor-pointer font-montserrat font-medium">
                            <input className="cursor-pointer mr-2" type="radio" name="Sort" value="HighToLow" onChange={(e) => dispatch(addvalues(e.target.value))} />
                            Cost: High to Low
                        </label>
                        <button className="flex items-center justify-center px-7 py-4 max-sm:px-5 max-sm:py-2 gap-2 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red hover:bg-red-500" onClick={closeModal}>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryRestaurantsModal;
