import mainLogo from "../assests/food logo (1).png"
import mainLogo1 from "../assests/food 12.png"
const Nav = () => {
  return (
    <header className="padding-x w-full ">
    <nav className="flex  justify-between items-center max-container " >
        <a href="/">
            <img src="https://i.pinimg.com/originals/02/fd/5c/02fd5cc15841730936c0c5c555dae3a9.png" alt="logo" width={10} height={30} className="w-[150px] h-[150px] cursor-pointer"/>
        </a>
        <ul className="cursor-pointer ">
            <button className= "  border-coral-red border-2 rounded-full py-1.5 px-3.5 text-blue-700 font-bold text-sm cursor-pointer">Sign in</button>
        </ul>
    </nav>

    </header>
  )
}

export default Nav