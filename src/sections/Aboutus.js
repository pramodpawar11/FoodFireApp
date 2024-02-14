
const Aboutus = () => {
  return (
    <section className="flex justify-between items-center w-full max-lg:flex-col max-container gap-10 ">
    
    <div className="flex flex-1 justify-center items-center">
      <img src="https://about.grubhub.com/wp-content/uploads/2022/06/header-communities-desktop.png" width={500} height={50}   />
      
    </div>
    <div className="flex flex-col flex-1">
        <h1 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          About Yumhub
        </h1>
        <p className="mt-4 lg:max-w-lg  mb-4 text-lg text-slate-gray leading-6">
      Yumhub  helps you find and order food from wherever you are. How it works: you type in an address, we tell you the restaurants that deliver to that locale as well as showing you droves of pickup restaurants near you. Want to be more specific? Search by cuisine, restaurant name or menu item. We'll filter your results accordingly. When you find what you're looking for, you can place your order online or by phone, free of charge. Oh, and we also give you access to reviews, coupons, special deals and a 24/7 customer care team that tracks each order and makes sure you get exactly what you want.
      </p>
    </div>
    </section>
  )
}

export default Aboutus