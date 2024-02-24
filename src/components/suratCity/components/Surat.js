import BestPlacesToEat from "./BestPlacesToEat.js"
import DeliveryRestaurants from "./DeliveryRestaurants.js"
import Footer from "../../../sections/Footer.js"
import Header from "./Header.js"
import TopRestaurant from "./TopRestaurant.js"
import WhatsInMind from "./WhatsInMind.js"
const Surat = () => {
  return (
    <div>
      <Header/>
    <div className="max-container padding-xx">
        <WhatsInMind/>
        <TopRestaurant/>
        <DeliveryRestaurants/>
        <BestPlacesToEat/>
       
    </div>
    <section className="padding-x bg-black padding-t pb-8">
          <Footer  />
        </section>
    </div>
  )
}

export default Surat