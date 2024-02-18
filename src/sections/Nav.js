import { Mainlogo_URL } from "../utils/Constants"
const Nav = () => {
  return (
    <header className="padding-x w-full ">
    <nav className="flex  justify-between items-center max-container " >
        <a href="/">
            <img src={Mainlogo_URL} alt="logo"  className="h-28 cursor-pointer"/>
        </a>
        <ul className="cursor-pointer ">
            <button className= "  border-coral-red border-2 rounded-full py-1.5 px-3.5 text-blue-700 font-bold text-sm cursor-pointer">Sign in</button>
        </ul>
    </nav>

    </header>
  )
}

export default Nav