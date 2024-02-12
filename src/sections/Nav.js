import logoImg from "../assests/pngwing.com (1).png"
const Nav = () => {
  return (
    <header className="padding-x pb-8 absolute w-full z-10">
    <nav className="flex justify-between items-center max-container">
        <a href="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT281auN11e-OaZTPUuyEi3ZvIER86v44RnIlEZJn7ADoUA1-baG53pAKPtxohCoWP_0pE&usqp=CAU" alt="logo" width={100} height={40} className="m-0 w-[100px] h-[100px]"/>
        </a>
        <ul>
            <button className= "border-2 rounded-full py-1 px-3 text-blue-700 font-bold">SignIn</button>
        </ul>
    </nav>

    </header>
  )
}

export default Nav