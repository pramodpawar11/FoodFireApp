import { WhatsINMind_URL } from "../../../utils/Constants";
import useWhatsinmind from "../hooks/useWhatsinmind";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const WhatsInMind = () => {
    const whatsMind = useWhatsinmind();
    const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 700
  }
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 700
  }
  if (whatsMind.length == 0) return;
  return (
    <div className="max-container padding-xx w-full">
      <div className="flex relative items-center mt-2">
        <MdChevronLeft className="cursor-pointer opacity-50 hover:opacity-100" onClick={slideLeft} size={40} />
        <div id="slider" className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {
            whatsMind.map((data) => <img key={data.id}  className="w-[150px] max-sm:w-[96px] inline-block p-1 cursor-pointer hover:scale-105 ease-in-out duration-300" src={WhatsINMind_URL + data.imageId} />)
          }
        </div>
        <MdChevronRight className="cursor-pointer opacity-50 hover:opacity-100" onClick={slideRight} size={40} />
      </div>
    </div>
  )
}

export default WhatsInMind