import { useRef } from "react"
import Button from "../utils/Button"
import { Link } from "react-router-dom";

const StateModal = ({ closeModal }) => {
  const modalRef = useRef();
  const closeBackground = (e) => {
    if (modalRef.current === e.target) closeModal();
  }
  return (
    <div ref={modalRef} className="fixed inset-0 bg-black h-screen w-full bg-opacity-30 backdrop-blur-sm" onClick={closeBackground}>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 md:p-8 rounded-3xl shadow-md w-full max-w-md mx-auto space-y-2">
        <button className="cursor-pointer top-4 right-4 absolute text-xl max-sm:top-2" onClick={closeModal}>❌</button>
        <div className="flex justify-around">
          <div className="space-y-3 max-md:space-y-2">
          
          <Link to={"/surat"}><Button lable={"Surat"} /></Link>
            <Button lable={"Pune"} />
          </div>
          <div className="space-y-3 max-md:space-y-2">
            <Button lable={"Mumbai"} />
            <Button lable={"Bangalore"} />
          </div>
        </div>
        <p className="text-center capitalize font-bold text-sm max-sm:text-[12px]">Service is restricted to the listed cities only!</p>
      </div>

    </div>

  )
}

export default StateModal