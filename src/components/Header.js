import { Link } from "react-router-dom"
import LogoImg from "./assests/pngwing.com (1).png"
const Header = () => {
    return (
        <header className="max-w-[100%] mx-auto shadow-2xl px-[20px] h-[12vh]">
            <div className="grid grid-cols-[40%_auto] items-center">
                <div>
                    <img className="sm:h-[60px] h-[35px]" src={LogoImg} />
                </div>
                <div>
                    <ul className="flex justify-around">
                        <li className="">
                            <span className="material-symbols-outlined">search</span>
                            <span>Search</span>
                        </li>
                        <li>

                            <span className="material-symbols-outlined">help_center</span>
                            <span>Help</span>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">account_circle</span>
                            <span>SignIn</span>

                        </li>
                        <li>
                            <span className="material-symbols-outlined">shopping_cart</span>
                            <span>Cart</span>

                        </li>
                    </ul>
                </div>
            </div>

        </header>
    )
}
export default Header