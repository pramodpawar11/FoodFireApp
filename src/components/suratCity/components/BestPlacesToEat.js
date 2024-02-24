import { useSelector } from "react-redux"
import BestPlacesToEarCards from "./BestPlacesToEarCards";

const BestPlacesToEat = () => {
    const bestPlacesToEat = useSelector((store)=>store.swiggyData.bestPlacesToEat);
    console.log(bestPlacesToEat);
    if(bestPlacesToEat==null) return;
  return (
    <div className="padding-t">
        <h1 className="font-montserrat leading-normal font-bold  capitalize text-xl text-black p-2  flex items-center">Best places to eat across cities</h1>
        <div className="mt-5 flex flex-wrap ">
        {
            bestPlacesToEat.map((places,index)=><BestPlacesToEarCards key={index} places={places}/>)
        }
        </div>
    </div>
  )
}

export default BestPlacesToEat