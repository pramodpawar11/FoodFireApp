import { Mainlogo_URL } from "../../../utils/Constants";
import humburger from "../../../assests/icons/hamburger.svg";
import { useState } from "react";
import HumburgerModal from "../utils/HumburgerModal";
import { BiSolidOffer } from "react-icons/bi";


const Header = () => {
    const [showHumburger,setShowHumburger] = useState(false);
    const handleHumburger = ()=>{
        setShowHumburger(true);
    }
    return (
        <section className="padding-x w-full shadow-md  ">
            <nav className="flex  justify-between items-center max-container ">
                <div>
                <img src={Mainlogo_URL} className="h-24 cursor-pointer  duration-150 hover:scale-105" />
                
                </div>
                <ul className="  flex w-9/12 justify-around items-center  max-md:hidden ">
                    <li className="font-montserrat leading-normal text-lg cursor-pointer font-medium text-slate-gray flex items-center hover:text-coral-red"> <BiSolidOffer className="mr-2 text-[23px]" />About</li>
                    <li to={"/contact"} className="font-montserrat leading-normal font-medium cursor-pointer text-lg text-slate-gray flex items-center hover:text-coral-red"><span className="material-symbols-outlined mr-2">call</span>Contact</li>
                    <li to={"/sign"} className="font-montserrat leading-normal font-medium text-lg cursor-pointer text-slate-gray flex items-center hover:text-coral-red"><span className="material-symbols-outlined mr-2">account_circle</span>Sign In</li>
                    <li to={"/cart"} className="font-montserrat leading-normal font-medium text-lg cursor-pointer text-slate-gray flex items-center hover:text-coral-red"><sup>(0)</sup><span className="material-symbols-outlined mr-2">shopping_cart</span>Cart</li>

                </ul>
                <div className='hidden max-md:block' onClick={handleHumburger}>
                    <img src={humburger} alt='hamburger icon' width={25} height={25} />
                </div>
                {showHumburger && <HumburgerModal closeHumburger = {()=>setShowHumburger(false)}/>}
            </nav>
        </section>
    )
}

export default Header