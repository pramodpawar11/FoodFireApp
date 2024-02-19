import { useEffect, useState } from "react";
import { SwiggyData_URL } from "../../../utils/Constants";
import { useDispatch } from "react-redux";
import { addSwiggyApis } from "../../../utils/swiggyApiSlice";

const useWhatsinmind = () => {
    const [whatsMind, setWathsMind] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const respose = await fetch(SwiggyData_URL);
        const json = await respose.json();
        console.log(json.data);
        dispatch(addSwiggyApis(json.data));

        setWathsMind(json.data.cards[0].card.card.imageGridCards.info);
    }
    return whatsMind;
}

export default useWhatsinmind




