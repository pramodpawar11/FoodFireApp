import mainLogo from "../assests/food logo (1).png"
const Nav = () => {
  return (
    <header className="padding-x mb-8 absolute w-full z-10">
    <nav className="flex flex-row justify-between items-center max-container">
        <a href="/">
            <img src={mainLogo} alt="logo" width={90} height={30} className="m-0 w-[90px] h-[90px]"/>
        </a>
        <ul>
            <button className= "border-coral-red border-2 rounded-full py-1.5 px-3.5 text-blue-700 font-bold text-sm">Sign in</button>
        </ul>
    </nav>

    </header>
  )
}

export default Nav