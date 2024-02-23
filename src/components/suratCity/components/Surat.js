import DeliveryRestaurants from "./DeliveryRestaurants.js"
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
    </div>
    </div>
  )
}

export default Surat