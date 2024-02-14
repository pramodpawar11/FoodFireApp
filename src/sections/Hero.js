import Button from "../utils/Button"

const Hero = () => {
  return (
    <section className="flex items-center justify-between w-full max-lg:flex-col max-container gap-10">
    <div className="flex flex-col flex-1">
        <h1 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">Pickup or <span className="text-coral-red">delivery</span> from restaurants near you</h1>
        <p className="mt-4 lg:max-w-lg info-text mb-4">
        Explore restaurants that deliver near you, or try yummy takeout fare. With a place for every taste, it’s easy to find food you crave, and order online or through the Grubhub app. Find great meals fast with lots of local menus. Enjoy eating the convenient way with places that deliver to your door.
        </p>
        <Button lable="Explore More"/>
    </div>
    <div className="flex flex-1 justify-center items-center">
        <img src="https://res.cloudinary.com/grubhub-assets/image/upload/fl_lossy,f_auto,w_570/v1533845150/static-homepage/women-eating-burgers-delivery-v3.png" />
    </div>
    </section>
  )
}
export default Hero