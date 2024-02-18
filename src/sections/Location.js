import { useRef, useState } from "react"
import StateModal from "../components/StateModal.js"

const Location = () => {
  const [showModal,setShowModal] = useState(false);
  console.log(showModal);
  const handleClick = ()=>{
      setShowModal(true);
  }
  return (
    <section className="h-screen flex items-center relative  justify-center">
      <div className="absolute inset-0 overflow-hidden padding-t  ">
        <div className="absolute w-full h-full object-cover object-center max-sm:mt-10 bg-black opacity-50 "></div>
        <img className="w-full h-full object-cover object-center max-sm:mt-10" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2lzMTYwNjItaW1hZ2Uta3d2eWZrd3IuanBn.jpg" />
      </div>
      <div className="absolute flex items-center justify-center flex-col">
        <div className="text-center">
          <span className="  text-white sm:text-4xl text-3xl font-bold font-montserrat">Get food</span>
          <span className=" text-coral-red sm:text-4xl text-3xl font-bold font-montserrat pr-2 pl-2">delivery</span>
          <span className=" text-white sm:text-4xl text-3xl font-bold font-montserrat">and more</span>
        </div>


        <button className="rounded-2xl py-2 px-[30%] mt-5 cursor-pointer text-white font-bold bg-coral-red outline-none border-none hover:bg-red-500" onClick={handleClick}>Select City</button>
      </div>
    
        {showModal && <StateModal closeModal = {()=>setShowModal(false)}/>}
  

    </section>
  )
}

export default Location