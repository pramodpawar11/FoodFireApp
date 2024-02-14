import logo1 from "../assests/Unauth_HP_illo1 (1).svg"
import logo2 from "../assests/Unauth_HP_illo2.svg"
import logo3 from "../assests/Unauth_HP_illo3.svg"

const Service = () => {
  return (
    <section className="max-container pt-5">
      <div className="text-center pb-5">
        <span className="sm:text-4xl text-3xl font-bold">Why you'll love </span>
        <span className="sm:text-4xl text-3xl font-bold text-coral-red">Yumhub</span>
      </div>
      <div className="flex flex-wrap justify-around items-center gap-4">
        <div className="sm:w-3/12  text-center mb-8">
          <div className="  mx-auto">
            <img src={logo1} alt="Logo 1" className="mx-auto" />
          </div>
          <h1 className="font-bold text-2xl font-montserrat mt-4">
            Something for everyone
          </h1>
          <span className=" mx-auto">
            We've got every meal covered and more: snacks, dessert, paper towels...
          </span>
        </div>
        <div className="sm:w-3/12  text-center mb-8">
          <div className=" mx-auto">
            <img src={logo2} alt="Logo 2" className="mx-auto" />
          </div>
          <h1 className="font-bold text-2xl font-montserrat mt-4">
            Delivery or pickup
          </h1>
          <span className=" mx-auto">
            Sit back and relax, have us deliver to you or skip the line with pickup.
          </span>
        </div>
        <div className="sm:w-3/12  text-center mb-8">
          <div className=" mx-auto">
            <img src={logo3} alt="Logo 3" className="mx-auto" />
          </div>
          <h1 className="font-bold text-2xl font-montserrat mt-4">
            Save with Yumhub+
          </h1>
          <span className=" mx-auto">
            Join Yumhub+ and get unlimited 0 delivery fees, exclusive offers, and more.
          </span>
        </div>
      </div>
    </section>
  );  
};

export default Service;
