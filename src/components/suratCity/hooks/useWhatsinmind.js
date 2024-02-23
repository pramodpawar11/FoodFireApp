import { useEffect, useState } from "react";
import { SwiggyData_URL } from "../../../utils/Constants";
import { useDispatch } from "react-redux";
import { adddeliveryRestaurants, addtopRestaurants } from "../../../utils/swiggyApiSlice";

const useWhatsinmind = () => {
    const [whatsMind, setWathsMind] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const respose = await fetch(SwiggyData_URL);
        const json = await respose.json();
        dispatch(addtopRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants));
        dispatch(adddeliveryRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants));
        setWathsMind(json.data.cards[0].card.card.imageGridCards.info);
    }
    return whatsMind;
}

export default useWhatsinmind





