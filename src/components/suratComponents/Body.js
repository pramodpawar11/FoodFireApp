import { useEffect, useState } from "react"
import { Whats_on_your_mind_URL } from "../../utils/Constants";
import axios from "axios";


const Body = () => {
  const [whatsMind,setWathsMind] = useState([]);
  console.log(whatsMind);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async()=>{
    const respose = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.18880&lng=72.82930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await respose.json();
    const findArray = json.data.cards[8].card.card;
    console.log(findArray);
    const data = findArray.cities.filter((data)=>data.text==="Mumbai");
    console.log(data);
    // setWathsMind(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
   }
  if(whatsMind.length==0) return;
  return (
    <div>
        {
          whatsMind.map((data)=>{

          })
        }
    
    </div>
  )
}

export default Body