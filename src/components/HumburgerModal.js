import { useRef } from "react"
import { BiSolidOffer } from "react-icons/bi";


const HumburgerModal = ({closeHumburger}) => {
  const humburgerRef = useRef();
  const handleClose = (e)=>{
    if(humburgerRef.current == e.target) closeHumburger();
  }
  return (
    <div ref={humburgerRef} className="fixed inset-0 bg-black h-screen w-full bg-opacity-30 backdrop-blur-sm"onClick={handleClose}>
      <div className="fixed h-screen   bg-white p-4   shadow-md w-8/12  space-y-2">
      <button className="cursor-pointer top-4 right-4 absolute text-3xl max-sm:top-2" onClick={closeHumburger}>❌</button>
      
      <ul className=" flex flex-col justify-around items-center h-4/6">
      <li className="font-montserrat leading-normal text-3xl max-sm:text-2xl font-medium text-slate-gray flex items-center"> <BiSolidOffer className="mr-2 text-[28px]" />About</li>

        <li to={"/contact"} className="font-montserrat leading-normal text-3xl max-sm:text-2xl font-medium text-slate-gray flex items-center"><span className="material-symbols-outlined mr-2 text-4xl max-sm:text-3xl">call</span>Contact</li>
        <li to={"/sign"} className="font-montserrat leading-normal text-3xl max-sm:text-2xl font-medium text-slate-gray flex items-center"><span className="material-symbols-outlined mr-2 text-4xl max-sm:text-3xl">account_circle</span>Sign In</li>
        <li to={"/cart"} className="font-montserrat leading-normal text-3xl max-sm:text-2xl font-medium text-slate-gray flex items-center"><sup>(0)</sup><span className="material-symbols-outlined mr-2 text-4xl max-sm:text-3xl">shopping_cart</span>Cart</li>

      </ul>
      </div>
    </div>
  )
}

export default HumburgerModal