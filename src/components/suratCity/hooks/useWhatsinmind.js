import { useEffect, useState } from "react";
import { SwiggyData_URL } from "../../../utils/Constants";
import { useDispatch } from "react-redux";
import { addbestPlacesToEar, adddefaultMerged, adddeliveryRestaurants, addmergedRestaurants, addtopRestaurants } from "../../../utils/swiggyApiSlice";

const useWhatsinmind = () => {
    const [whatsMind, setWathsMind] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const respose = await fetch(SwiggyData_URL);
        const json = await respose.json();
        const topRestaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        const deliveryRestaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        const mergedRestaurants = [...topRestaurants,...deliveryRestaurants]
        const defaultMerged = [...topRestaurants,...deliveryRestaurants];
        dispatch(adddefaultMerged(defaultMerged));
        dispatch(addtopRestaurants(topRestaurants));
        dispatch(addmergedRestaurants(mergedRestaurants));
        dispatch(addbestPlacesToEar(json.data.cards[6].card.card.brands));
        setWathsMind(json.data.cards[0].card.card.imageGridCards.info);
    }
    return whatsMind;
}

export default useWhatsinmind





